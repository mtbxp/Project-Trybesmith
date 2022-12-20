import NewProductInput from '../types/products';
import { addProducts, getLastProduct } from '../models/productModel';

const addNewProduct = async (productDate: NewProductInput) => {
  await addProducts(productDate);
  const [result] = await getLastProduct();
  return { status: 201, date: result };
};

export default addNewProduct;