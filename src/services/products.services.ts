import { addAProductModel, getAllProductsModel } from '../models/products.model';

export const addAProductService = async (name:string, amount:string) => {
  try {
    const newProduct = await addAProductModel(name, amount);
    return { newProduct };
  } catch (e) {
    const err = e as TypeError;
    return { error: true, message: err.message };
  }
};

export const getAllProductsService = async () => {
  try {
    const allProducts = await getAllProductsModel();
    return { allProducts };
  } catch (e) {
    const err = e as TypeError;
    return { error: true, message: err.message };
  }
};