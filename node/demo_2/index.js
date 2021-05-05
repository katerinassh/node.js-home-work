const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./exceptions/defaultException.js');
const searchRouter = require('./routes/searchRouter.js');
const productRouter = require('./routes/productRouter.js');
const orderRouter = require('./routes/orderRouter.js');

const PORT = 8080;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const app = express();

app.use(morgan('dev'));

app.use('/products/search', searchRouter);
app.use('/products', productRouter);
app.use('/order', orderRouter);

app.use(errorHandler);


app.listen(PORT, () => {
    console.log('Server has been hosted on 8080')
});