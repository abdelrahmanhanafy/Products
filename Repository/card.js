const model = require('../Core/card');

const addToCard = async ({ products,total }) => {
  const card = new model({products,total});

  return await card.save();
};

module.exports = { addToCard };
