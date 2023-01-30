import ordersModel from '../models/ordersModel';
import { Torders, TorderInfos } from '../types';

const listOrders = async (): Promise<Torders[]> => {
  const allOrders = await ordersModel.listOrders();
  return allOrders;
};

const addOrders = async (orderInfos: TorderInfos): Promise<TorderInfos> => {
  const { productsIds } = orderInfos;
  const userId = orderInfos?.user?.id as number;
  const infos = { productsIds, userId };
  const allOrders = await ordersModel.addOrders(infos);
  return allOrders;
};

export default { listOrders, addOrders };
