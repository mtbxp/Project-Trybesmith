// ./src/service/orders.service.ts

import OrderInterface from '../interfaces/OrderInterface';
import OrderModel from '../models/orders.model';

export default class OrderService {
  public order = new OrderModel();

  async getOrders(): Promise <OrderInterface[]> {
    const orders = await this.order.getOrders();
    return orders;
  }
}
