import NewProductInput from '../types/products';
import { addProducts, AllProducts, getLastProduct } from '../models/productModel';

const addNewProduct = async (productDate: NewProductInput) => {
  await addProducts(productDate);
  const [result] = await getLastProduct();
  return { status: 201, date: result };
};

export const getAllProducts = async () => {
  const result = await AllProducts();
  return { status: 200, date: result };
};

export default addNewProduct;