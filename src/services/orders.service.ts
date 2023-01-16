import OrdersModel from '../models/orders.model';
import Order from '../interfaces/order.interface';
import connection from '../models/connection';

export default class ProductService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}
