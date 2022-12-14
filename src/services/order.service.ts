import getOrders from '../models/order.model';

const getAll = async () => {
  const orders = await getOrders();
  return orders;
};

export default getAll;