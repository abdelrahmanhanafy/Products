const express = require('express');
const { listProducts, addProduct } = require('../../Repository/product');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category,page, size } = req.query;

    const products = await listProducts({ category ,page: parseInt(page) || 1, size: parseInt(size) || 10 });

    res.send(products);
  } catch (error) {

    res.status(400).send(`something went wrong`);
  }
});

router.post('/', async (req, res) => {
    try {
      const { name, size, quantity, category, price} = req.body;
  
      const product = await addProduct({ name, size, quantity,category, price });
  
      res.send(product);
    } catch (error) {
      
      res.status(400).send(`Something went wrong`);
    }
  });
module.exports = router;