const express = require('express');
const { addToCard } = require('../../Repository/card');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { products } = req.body;

    const total =products.reduce((acc, product) => acc + product.price , 0)
    console.log(total)


    const card = await addToCard({ products,total});

    res.send(card);
  } catch (error) {
    
    res.status(400).send(`Something went wrong`);
  }
});


module.exports = router;
