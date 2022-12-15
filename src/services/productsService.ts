import { Product } from '../interfaces/interfaces';
import * as productModel from '../models/productsModel';
import * as tkn from '../auth/validateJWT';

async function addProduct(product: Product) {
  const result = await productModel.addProd(product);
  return result;
}

async function getAllProds() {
  const result = await productModel.getAllProds();
  return result;
}

async function getAllOrders() {
  const result = await productModel.getAllOrders();
  return result;
}

const addOrder = async (productsIds: number[], token: string) => {
  const userId = await tkn.getIdFromToken(token);
  const orderAdded = await productModel.addOrder(userId, productsIds);
  return orderAdded;
};

export {
  addProduct,
  getAllProds,
  getAllOrders,
  addOrder,
};
