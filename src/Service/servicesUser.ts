import * as productsModels from '../models/userModel';
import { TPeople } from '../types';

export async function createNewUser(users: TPeople) {
  const createProducts = await productsModels.createUser(users);
  return createProducts;
}

export async function getAllOrdersById() {
  const getAllOrders = await productsModels.getAllOrders();
  return getAllOrders;
}