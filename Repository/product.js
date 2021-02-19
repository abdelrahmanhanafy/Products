const model = require('../Core/product');

const addProduct = async ({ name, size, quantity,category,price }) => {
  const product = new model({name, size, quantity,category,price});

  return await product.save();
};

const listProducts = async ({ page, size,category }) => {
  return await model
    .find(category? {category} : {} )
    .skip(size * (page - 1))
    .limit(size);
};

module.exports = { listProducts, addProduct };