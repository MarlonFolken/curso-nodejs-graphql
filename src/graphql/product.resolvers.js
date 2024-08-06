const getProduct = (_, {id}) => {
  return {
    id,
    name: 'Product 1',
    price: 990.00,
    description: 'Our hundredth product',
    image: 'https://media.istockphoto.com/id/844900792/es/foto/agua-splash-en-el-blanco-de-fondo.jpg?s=612x612&w=0&k=20&c=oy9J0ZXDNmuRujxFckBZnqKlqBcv3sAoW7NTl1X0Ae0=',
    createdAt: new Date().toISOString(),
  }
}

const getProducts = () => {
  return [];
}

module.exports = { getProduct, getProducts };