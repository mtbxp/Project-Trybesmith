import ordersModel from '../model/orders.model';
import HttpException from '../shared/http.exception';
import { status } from '../utils/status';

const getOrdersService = async ():Promise<object[]> => {
  try {
    const orders = await ordersModel.getOrders();
    return orders;
  } catch (error) {
    throw new HttpException(status.ERROR, 'Cannot find orders');
  }
};

export default { getOrdersService };