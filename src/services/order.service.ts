import pool from '../models/connection';
import OrderModel from '../models/order.model';
import Order from '../interfaces/order.interface';

class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(pool);
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();

    return result;
  }
}

export default OrderService;
