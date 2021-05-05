const Joi = require('joi');

const UserHeaderDTO = Joi.object({
    user_phone: Joi.string().length(12).required(),
    user_password: Joi.string().min(6).required()
});


const OrderDTO = Joi.object().keys({
    products: Joi.array().items(Joi.object({
        id: Joi.number().required(),
        count: Joi.number().required()
    }))
});

module.exports = {
    UserHeaderDTO,
    OrderDTO
};