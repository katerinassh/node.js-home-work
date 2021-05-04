const searchModel = require ('../models/searchModel.js');
const sendResponse = require('../views/view.js');

class SearchController {
    async getProductsByCategory (req, res, categories) {
        const categoryIds = categories.split(',').map(id => +id);
        const data = await searchModel.showProductsByCategory(categoryIds);
        const ok = {status: 'ok', data, message: 'Products found by categories'};
    
        sendResponse(ok, res);
    }

    async getProductsByName (req, res, products) {
        const data = await searchModel.showProductsByName(products);
        const ok = {status: 'ok', data, message: 'Products found by product name'};
    
        sendResponse(ok, res);
    }

    async getProductsByManufacture (req, res, manufactures) {
        const data = await searchModel.showProductsByManufacture(manufactures);
        const ok = {status: 'ok', data: data, message: 'Products found by manufacture name'};
    
        sendResponse(ok, res);
    }

    async getProductsByNameManufacture (req, res, searchCriteria) {
        const data = await searchModel.showProductsByNameManufacture(searchCriteria);
        const ok = {status: 'ok', data, message: 'Products found by name and manufacture'};
    
        sendResponse(ok, res);
    }

    async getProductsByCategoryName (req, res, searchCriteria) {
        searchCriteria.categories = searchCriteria.categories.split(',').map(id => +id);
        const data = await searchModel.showProductsByCategoryName(searchCriteria);
        const ok = {status: 'ok', data, message: 'Products found by category and name'};
    
        sendResponse(ok, res);
    }

    async getProductsByCategoryManufacture (req, res, searchCriteria) {
        searchCriteria.categories = searchCriteria.categories.split(',').map(id => +id);
        const data = await searchModel.showProductsByCategoryManufacture(searchCriteria);
        const ok = {status: 'ok', data, message: 'Products found by category and manufacture'};
    
        sendResponse(ok, res);
    }
    async getProductsByAll (req, res, searchCriteria) {
        searchCriteria.categories = searchCriteria.categories.split(',').map(id => +id);
        const data = await searchModel.showProductsByAll(searchCriteria);
        const ok = {status: 'ok', data, message: 'Products found by category, name and manufacture'};
    
        sendResponse(ok, res);
    }

}

const searchController = new SearchController();

module.exports = searchController;

