const { Router } = require('express');
const {UserHeaderDTO, OrderDTO} = require('../dtos/orderDtos.js');
const authMiddleware = require('../middlewares/authMiddleware.js');
const orderMiddleware = require('../middlewares/orderMiddleware.js');
const validator = require('express-joi-validation').createValidator({})
const orderController = require('../controllers/orderController.js');

const orderRouter = Router();

orderRouter.use('/', validator.headers(UserHeaderDTO), authMiddleware, validator.body(OrderDTO), orderMiddleware, orderController.postOrder);

module.exports = orderRouter;