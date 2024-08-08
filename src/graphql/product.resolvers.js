const ProductsService = require('./../services/product.service');
const service = new ProductsService();

const getProduct = async (_, {id}) => {
  const product = await service.findOne(id);
  return product;
  /* return {
    id,
    name: 'Product 1',
    price: 990.00,
    description: 'Our hundredth product',
    image: 'https://media.istockphoto.com/id/844900792/es/foto/agua-splash-en-el-blanco-de-fondo.jpg?s=612x612&w=0&k=20&c=oy9J0ZXDNmuRujxFckBZnqKlqBcv3sAoW7NTl1X0Ae0=',
    createdAt: new Date().toISOString(),
  } */
}

const getProducts = async () => {
  const products = await service.find({});
  return products;
}

const addProduct = async (_, { dataTransferObject }) => {
  const newProduct = await service.create(dataTransferObject);
  return newProduct;
}

const updateProduct = async (_, {id, dataTransferObject}) => {
  const updatedProduct = await service.update(id, dataTransferObject);
  return updatedProduct;
}

const deleteProduct = async (_, {id}) => {
  const deletedProduct = await service.delete(id);
  return deletedProduct;
}

module.exports = { getProduct, getProducts, addProduct, updateProduct, deleteProduct };