import ordersModel from '../models/ordersModel';

async function getAllOrders() {
  const data = await ordersModel.getAllOrders();
  return { status: 200, data };
}

export default {
  getAllOrders,
};