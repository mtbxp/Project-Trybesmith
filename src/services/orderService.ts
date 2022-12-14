import { IOrder } from '../interfaces/IOrder';
import OrderModel from '../models/orderModel';

export default class OrderService {
  public order = new OrderModel();

  async getAllOrders(): Promise <IOrder[]> {
    const orders = await this.order.getAllOrders();
    return orders;
  }
}