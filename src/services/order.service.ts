import OrderModel from '../models/order.model';
import Order from '../interfaces/orders.interface';
import connection from '../models/connection';

// funcoes retiradas do couse.

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrders(): Promise<Order[]> {
    const orders = await this.model.getAllOrders();
    return orders;
  }
}