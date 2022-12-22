// import { /* ResultSetHeader, */ RowDataPacket } from 'mysql2';
import OrderModels from '../models/order.models';
import { Order } from '../interfaces/interface';

async function getAllOrders(): Promise<Order[]> {
  const result = await OrderModels.getAllOrders();
  return result;
}

export default {
  // getProductById,
  getAllOrders,
  // updateProduct,
};