const { Router } = require('express');
const orderController = require('../controllers/orderController.js');

const orderRouter = Router();

orderRouter.use('/', orderController.postOrder);

module.exports = orderRouter;