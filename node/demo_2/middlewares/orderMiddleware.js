const orderModel = require ('../models/orderModel.js');
const NotFound = require('../exceptions/notFoundException.js');

const orderMiddleware = async (req, res, next) => {
    const products = orderModel.parseUrl(req.path);

    const isFoundProducts = await orderModel.findProduct(products);
    const isEnoughAmount = await orderModel.checkAmount(products);
    if (isFoundProducts.status === 'error') {
        next(new NotFound(404, 'Not enough products'));
    } 
    if (isEnoughAmount.status === 'error') {
        next(new NotFound(404, 'Products are not found'));
    }

    next();
};

module.exports = orderMiddleware;