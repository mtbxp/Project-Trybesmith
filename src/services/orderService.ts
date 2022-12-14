import { IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/orderModel';

export default class OrderService {
  public order = new OrderModel();

  public getAll = async (): Promise<IOrder[]> => {
    const order = await this.order.getAll();
    return order;
  };
}