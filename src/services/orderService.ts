import getOrders from '../models/ordersModel';

const getAllOrders = async () => {
  const result = await getOrders();
  return { status: 200, date: result };
};

export default getAllOrders;