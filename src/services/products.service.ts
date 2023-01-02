import productModel from '../models/products.model';

async function getAllProducts() {
  const result = await productModel.getAllProducts();
  return { status: 200, result };
}

async function insertProduct(name: string, amount: string) {
  const result = await productModel.insertProduct(name, amount);
  
  if (!result) return { status: 404, message: 'Problems in creation' };

  return { status: 201, result };
}

export default {
  getAllProducts,
  insertProduct,
};