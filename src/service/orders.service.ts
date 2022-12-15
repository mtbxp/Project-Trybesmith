import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import Order from '../interfaces/orders.interface';

class OrderService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getOrders(): Promise<Order[]> {
    const orders = await this.model.getOrders();
    return orders;
  }
}

export default OrderService;