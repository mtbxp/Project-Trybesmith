import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import Order from '../interfaces/orderInterface';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getAllOrders(): Promise<Order[]> {
    const result = await this.model.getAllOrders();

    return result;
  }
}
