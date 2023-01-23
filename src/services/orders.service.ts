import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import Order from '../interfaces/orders.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();

    return orders;
  }

  public async create(user: number, productsIds: number[]): Promise<void> {
    await this.model.create(user, productsIds);
  }
}

export default OrderService;