import * as ordersModel from '../models/orders.model ';

const addProduct = async () => {
};

const listAllOrders = async () => {
  const products = await ordersModel.listAllOrders();
  return products;
};

export {
  listAllOrders,
  addProduct,
};