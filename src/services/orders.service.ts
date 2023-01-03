import ordersModel from '../models/orders.models';

async function getAllOrders() {
  const result = await ordersModel.getAllOrders();
  return { status: 200, result };
}

export default {
  getAllOrders,
};