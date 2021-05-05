const orderModel = require ('../models/orderModel.js');
const mailerModel = require('../models/mailerModel.js');
const sendResponse = require('../views/view.js');

class OrderController {
    async postOrder(req, res) {
        const products = orderModel.parseUrl(req.path);
        const user  = res.locals.user;
        user.email = user.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) != null ? user.email : null;

        const orderId = orderModel.addOrderedItems(products, user.id);
        const ok = {status: 'ok', data: [], message: 'Order added'};

        const data = {user, order: products};
        mailerModel.mail(orderId, await mailerModel.getMoreInfo(data));
        
        sendResponse(ok, res);
    }
}
// const q = order/products:[{id:12,count:3},{id:98,count:10}];

const orderController = new OrderController();

module.exports = orderController;