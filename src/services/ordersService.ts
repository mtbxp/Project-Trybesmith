import OrdersModel from '../models/ordersModel';
import OrderInterface from '../interfaces/orders.ifc';

export default class OrdersService {
  public orders = new OrdersModel();

  async getAllOrders(): Promise <OrderInterface[]> {
    const allOrders = await this.orders.getAllOrders();
    return allOrders;
  }
}
