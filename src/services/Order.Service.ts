import Order from '../interfaces/order.Interface';
import OrderModel from '../models/Order.Model';
import { TCurrentUser } from '../types/types';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel();
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.model.getAll();
    return result;
  }

  public createOrder = async (body: TCurrentUser) => {
    const result = await this.model.createOrder(body);
  
    return result;
  };
}