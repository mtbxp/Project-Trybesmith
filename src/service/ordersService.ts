import ordersModel from '../models/ordersModel';

async function getAllOrders() {
  const data = await ordersModel.getAllOrders();
  return { status: 200, data };
}
async function NewOrderAndUptade(productId: number[], userId:number) {
  const result = await ordersModel.NewOrderAndUptade(productId, userId);
  return result;
}

export default {
  getAllOrders,
  NewOrderAndUptade,
};
