const { Router } = require('express');
const productController = require('../controllers/productController.js');

const productRouter = Router();

productRouter.use('/:id', productController.getProductById);
productRouter.use('/', productController.getAllProducts);

module.exports = productRouter;