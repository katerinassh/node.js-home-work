const { Router } = require('express');
const productController = require('../controllers/productController.js');

const productRouter = Router();

productRouter.get('/:id', productController.getProductById);
productRouter.get('/', productController.getAllProducts);

module.exports = productRouter;