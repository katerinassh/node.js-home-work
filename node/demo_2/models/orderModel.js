const client = require('./db.js');

class OrderModel {
    parseUrl(path) {
        let products = path.match(/\[(.*?)\]/g);
        
        const array = [];
        products = products.map(el => {
            el = el.split(',');
            const obj = {
                id: +el[0].split(':')[1],
                count: +el[1].replace('}', '').split(':')[1]
            }
            
            array.push(obj);
        });

        return array;
    }

    async findUser (user) {
        const { user_phone, user_password } = user;
        const { rows } = await client.query(`SELECT * FROM users WHERE phone = '${user_phone}' AND password = '${user_password}'`);
        return rows;
    }

    async findProduct(products) {
        const notFoundIds = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].id < 1 || products[i].id > 100) notFoundIds.push(JSON.stringify({id: products[i].id}));
        }
        if (notFoundIds.length !== 0) return {status: 'error', data: notFoundIds, message: 'Products are not found'};

        return {status: 'ok', data: [], message:'All products found'};
    }

    async checkAmount(products) {
        const notEnoughAmount = [];
        for (let i = 0; i < products.length; i++) {
            const { rows } = await client.query(`SELECT id, amount FROM products WHERE id = ${products[i].id}`);
            if (rows[0].amount < products[i].count) notEnoughAmount.push(JSON.stringify(products[i]));
        }
        if (notEnoughAmount.length !== 0) return {status: 'error', data: notEnoughAmount, message: 'Not enough products'};

        return {status: 'ok', data: [], message:'All products have enough amount'};
    }

    async addOrderedItems (products, userId) {
        await client.query(`INSERT INTO orders(user_id) VALUES (${userId})`);
        const orders = await client.query(`SELECT * FROM orders WHERE user_id = ${userId}`);
        const orderId = orders.rows[orders.rows.length - 1].id;

        for (let i = 0; i < products.length; i++) {
            await client.query(`INSERT INTO orderItems(order_id, product_id, amount) VALUES(${orderId}, ${products[i].id}, ${products[i].count})`);
        }

        return orderId;
    }
}

const orderModel = new OrderModel();
module.exports = orderModel;
