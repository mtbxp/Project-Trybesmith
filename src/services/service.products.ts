import modelProducts from '../models/products.model';
import { NewProduct, TProduct } from '../types/products.types';

const getAllProducts = async ():Promise<TProduct[]> => {
    const allProducts = await modelProducts.getAllProducts();
  
    return allProducts;
  };
  
  const createProducts = async (product: NewProduct):Promise<NewProduct> => {
    const productCreated = await modelProducts.createProducts(product);
    
    return productCreated;
};

export default {
  getAllProducts,
  createProducts,
};