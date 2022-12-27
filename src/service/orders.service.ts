// import { TOrder } from '../types';
import ordersModel from '../model/orders.model';
import HttpException from '../shared/http.exception';
import { status } from '../utils/status';

const getOrdersService = async ():Promise<object[]> => {
  try {
    const orders = await ordersModel.getOrders();
    // console.log(orders);
    return orders;
  } catch (error) {
    throw new HttpException(status.ERROR, 'Cannot find orders');
  }
};

export default { getOrdersService };