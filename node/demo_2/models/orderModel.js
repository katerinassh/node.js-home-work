const client = require('./db.js');

class OrderModel {
    parseUrl(path) {
        const params = path.replace(/%7B/g,'{').replace(/%7D/g, '}').match(/\[(.*?)\]/g);
        let [products, user] = params;
        
        user = user.replace(/[{()}]/g, '').replace(/[\[\]']+/g, '').split(',');
        products = products.replace(/[\[\]']+/g, '').split('},{');
        user = {
            name: user[0].split(':')[1],
            phone: user[1].split(':')[1],
            email: user[2].split(':')[1],
        };

        const array = [];
        products = products.map(el => {
            el = el.split(',');
            const obj = {
                id: +el[0].split(':')[1],
                count: +el[1].replace('}', '').split(':')[1]
            }
            
            array.push(obj);
        });

        return [array, user];
    }

    validateData(user) {
        if (!user.phone || user.phone.length !== 12 || user.name.length < 1) return {status: 'error', data : [ ], message: 'user info is not valid'};
        
        return {status: 'ok', data: [], message:'All data is valid'};
    }

    async findUser(user) {
        const { phone } = user;

        const { rows } = await client.query(`SELECT * FROM users WHERE phone = '${phone}'`);
        return (rows.length !== 0 ? true : false);
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

    async addUser (user) {
        let { name, phone, email } = user;

        const isFound = await this.findUser(user);
        if (!isFound) {
            await client.query(`INSERT INTO users(name, phone, email) VALUES('${name}', '${phone}', '${email}')`);
        }
        
        const { rows } = await client.query(`SELECT * FROM users WHERE phone = '${phone}'`);
        await client.query(`INSERT INTO orders(user_id) VALUES (${rows[0].id})`);

        const orders = await client.query(`SELECT * FROM orders WHERE user_id = ${rows[0].id}`);
        
        return orders.rows[orders.rows.length - 1].id;
    }

    async addOrderedItems (products, orderId) {
        for (let i = 0; i < products.length; i++) {
            await client.query(`INSERT INTO orderItems(order_id, product_id, amount) VALUES(${orderId}, ${products[i].id}, ${products[i].count})`);
        }
    }
}

const orderModel = new OrderModel();
module.exports = orderModel;
