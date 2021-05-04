const productModel = require ('../models/productModel.js');
const sendResponse = require('../views/view.js');

class ProductController {
    async getAllProducts (req, res) {
        try {
            const rows = await productModel.showAllProducts();

            const ok = {status: 'ok', data: rows, message: 'All products received succesfully'};
            const error = {status: 'error', data: rows, message: 'Products are not found'};

            !rows ? sendResponse(error, res) : sendResponse(ok, res);
        } catch (err) {
            const error = {status: 'error', data: [], message: 'Products are not found'};
            sendResponse(error, res);
        }
    }

    async getProductById (req, res) {
        const id = req.params.id;
        const error = {status: 'error', data: JSON.stringify({id}), message: `Product is not found`};
        try {
            const row = await productModel.showDetailedProduct(id);

            const ok = {status: 'ok', data: row, message: `Product ${id} received successfully`};
            !row ? sendResponse(error, res) : sendResponse(ok, res);
        } catch(err) {
            sendResponse(error, res)
        }
    }
}

const productController = new ProductController();

module.exports = productController;