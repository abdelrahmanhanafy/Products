const express = require('express');

const cardRouter = require('./Routes/card');
const productRouter = require('./Routes/product');

const router = express.Router();

// Card Route
router.use('/cards', cardRouter);

// Product Route
router.use('/products', productRouter);

module.exports = router;
