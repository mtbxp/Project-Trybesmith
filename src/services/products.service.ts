import { ProductRequest } from '../interfaces/products.interface';
import {
  registerProductModel,
  getAllProductsModel,
} from '../models/products.model';

export const registerProductService = async (product: ProductRequest) => {
  const insertId = await registerProductModel(product);
  return insertId;
};

export const getAllProductsService = async () => {
  const allProducts = await getAllProductsModel();
  return allProducts;
};