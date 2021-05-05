const { Router } = require('express');
const searchController = require('../controllers/searchController.js');
const productController = require('../controllers/productController.js');

const searchRouter = Router();

searchRouter.get('/', (req, res) => {
    const { categories, products, manufactures } = req.query;

    if (categories && !products && !manufactures) {
        searchController.getProductsByCategory(req, res, categories);
    }
    if (!categories && products && !manufactures) {
        searchController.getProductsByName(req, res, products);
    }
    if (!categories && !products && manufactures) {
        searchController.getProductsByManufacture(req, res, manufactures);
    }
    if (!categories && products && manufactures) {
        const searchCriteria = {products, manufactures};
        searchController.getProductsByNameManufacture(req, res, searchCriteria);
    }
    if (categories && products && !manufactures) {
        const searchCriteria = {categories, products};
        searchController.getProductsByCategoryName(req, res, searchCriteria);
    }
    if (categories && !products && manufactures) {
        const searchCriteria = {categories, manufactures};
        searchController.getProductsByCategoryManufacture(req, res, searchCriteria);
    }
    if (categories && products && manufactures) {
        const searchCriteria = {categories, products, manufactures};
        searchController.getProductsByAll(req, res, searchCriteria);
    }
});

module.exports = searchRouter;