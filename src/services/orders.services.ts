import ordersModels from '../models/orders.models';

const getAll = async () => {
  const allOrders = await ordersModels.getAll();
  return allOrders;
};

export default {
  getAll,
};