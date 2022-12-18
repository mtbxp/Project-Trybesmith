import { getAll, insertOrder } from '../models/order.model';

export async function getAllService() {
  const result = await getAll();
  return result;
}

export async function insertOrderService(userId: number, productsId: number[]) {
  const result = await insertOrder(userId, productsId);
  return result;
}