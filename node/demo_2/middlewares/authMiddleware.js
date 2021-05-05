const orderModel = require ('../models/orderModel.js');
const NotFound = require('../exceptions/notFoundException.js');

const authMiddleware = async (req, res, next) => {
    const { user_phone, user_password } = req.headers;

    const foundUser = await orderModel.findUser({user_phone, user_password});
    if (foundUser.length !== 0) {
        res.locals.user = foundUser[0];
        res.locals.isAuthenticated = true;
        next();
    } else {
        res.locals.isAuthenticated = false;
        next (new NotFound(401, 'Password not valid'));
    }
};

module.exports = authMiddleware;