const orderModel = require ('../models/orderModel.js');
const mailerModel = require('../models/mailerModel.js');
const sendResponse = require('../views/view.js');

class OrderController {
    async postOrder(req, res) {
        const [products, user] = orderModel.parseUrl(req.path);
        user.email = user.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) != null ? user.email : null;

        try {
            const validateData = orderModel.validateData(user);
            const isFoundProducts = await orderModel.findProduct(products);
            const isEnoughAmount = await orderModel.checkAmount(products);

            if (validateData.status === 'error') {
                sendResponse(validateData, res);
                return;
            }
            if (isFoundProducts.status === 'error') {
                sendResponse(isFoundProducts, res);
                return;
            }
            if (isEnoughAmount.status === 'error') {
                sendResponse(isEnoughAmount, res);
                return;
            }

            const orderId = await orderModel.addUser(user);
            orderModel.addOrderedItems(products, orderId);
            const ok = {status: 'ok', data: [], message: 'Order added'};

            const data = {user, order: products};
            mailerModel.mail(orderId, await mailerModel.getMoreInfo(data));

            sendResponse(ok, res);
        } catch (err) {
            console.log(err);
        }
    }
}
// const q = order/{products:[{id:12,count:3},{id:98,count:10}],user:[{name:'Ivan',phone:'380998887766',email:'user1@gmail.com'}]};

const orderController = new OrderController();

module.exports = orderController;