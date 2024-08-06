const { getProduct, getProducts } = require('./product.resolvers');

const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    getPerson: (_, args) => `Hello, my name is ${args.name} and my age is ${args.age} years old`,
    getInt: (_, args) => args.age,
    getFloat: () => 3.1416,
    getString: () => 'Hello world!',
    getBoolean: () => true,
    getID: () => '1234567890',
    getNumbers: (_, args) => args.numbers,
    // Product resolvers
    product: getProduct,
    products: getProducts
  }
};

module.exports = resolvers;