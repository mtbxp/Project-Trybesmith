import productsModel from '../models/productsModel';
import { TProduct } from '../types';

const getAllProducts = async (): Promise<TProduct[]> => {
  const products = await productsModel.getAllProducts();
  return products;
};

// const getProductById = async (id) => {
//   const products = await productModel.getProductById(id);
//   if (!products.length) return { type: 404, message: 'Product not found' };

//   return { type: null, message: products[0] };
// };

const insertProduct = async (products: TProduct) => {
  await Promise.all([products].map(async (element) => productsModel.insertProduct(element)));
  const getProduct = await productsModel.getAllProducts();
  const result = getProduct.length - 1;

  return getProduct[result];
};

// const newProduct = async (id, product) => {
//   const products = await productModel.getId(id);
//   if (!products.length) return { type: 404, message: 'Product not found' };
//   await productModel.newProduct(id, product);
//   return { type: null, message: { id, name: product.name } };
// };

// const updateProduct = async (id, product) => {
//   const produto = await productModel.getProductById(id);
//   if (!produto.length) return { type: 404, message: 'Product not found' };

//   await productModel.updateProduct(id, product);
//   return { type: null, message: { id, name: product.name } };
// };

// const deleteProduct = async (id) => {
//   const product = await productModel.getProductById(id);
//   console.log(product);
//   if (!product.length) return { type: 404, message: 'Product not found' };

//   await productModel.deleteProduct(id);
//   return { type: null, message: null };
// };

export default { getAllProducts, insertProduct };