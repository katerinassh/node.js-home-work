const nodemailer = require('nodemailer');
const client = require('./db.js');

class MailerModel {
    async getMoreInfo (data){
        const {user, order} = data;
        const changedData = [];
        let totalPrice = 0;

        for (let i = 0; i < order.length; i++) {
            const { rows } = await client.query(`SELECT id, name, price FROM products WHERE id = '${order[i].id}'`);

            rows[0].count = order[i].count;
            rows[0].cost = +order[i].count * +rows[0].price;
            totalPrice += rows[0].cost;
            changedData.push(rows[0]);
        }
        

        return {user, order: changedData, totalPrice: totalPrice};
    }

    async mail (orderId, data) {
        const transporter = nodemailer.createTransport({
            secure: false,
            tls: {
                rejectUnauthorized: false
            },
            service: 'gmail',
            auth: {
                user: 'shakiryanova.testing@gmail.com',
                pass: 'Fullstack12',
            },
          });
        
        const message = {
            from: `"Order #${orderId}" <shakiryanova.testing@gmail.com>`,
            to: 'ekaterina.shakiryanova@gmail.com',
            subject: 'Message from Node js',
            text: JSON.stringify(data)
          };
    
        await transporter.sendMail(message, function(error, response){
            if (error){
                console.log(error);
            } else{
                console.log('Order has been sent');
            };
    })}
};

const mailerModel = new MailerModel();

module.exports = mailerModel;


