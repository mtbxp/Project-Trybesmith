import ordersGetAllModel from '../models/orders.model';
import Orders from '../interface/orders.interface';

const ordersGetAllService = async (): Promise<Orders[]> => {
  const result = await ordersGetAllModel();

  return result;
};

export default ordersGetAllService;