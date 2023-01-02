import productModel from '../models/products.model';

async function getAllProducts() {
  const result = await productModel.getAllProducts();
  return { status: 200, result };
}

export default {
  getAllProducts,
};