import OrderModel from '../models/order.model';
import { OrderInterface } from '../interfaces/order.interface';

export default class OrderService {
  public orders = new OrderModel();

  async getOrders(): Promise <OrderInterface[]> {
    const orders = await this.orders.getOrders();
    return orders;
  }
}
