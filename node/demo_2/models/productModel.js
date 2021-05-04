const client = require('./db.js');

class ProductModel {
    async showAllProducts() {
        let { rows } = await client.query('SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category FROM products JOIN manufactures ON manufactures.id = products.manufacture_id JOIN categories ON categories.id = products.category_id');
        rows = rows.map(row => JSON.stringify(row));
        return rows;
    }

    async showDetailedProduct(id) {
        const { rows } = await client.query(`SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category, units.name AS units, price, img_link, ingridients 
        FROM products 
        JOIN manufactures ON manufactures.id = products.manufacture_id 
        JOIN categories ON categories.id = products.category_id
        JOIN units ON units.id = products.units_id
        WHERE products.id = ${id}`);
        return JSON.stringify(rows[0]);
    }
}

const productModel = new ProductModel();

module.exports = productModel;