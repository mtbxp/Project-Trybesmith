import connection from '../models/connection';
import OrdersModel from '../models/order.model';
import IOrder from '../interfaces/order.interface';

class OrderService {
  public models: OrdersModel;

  constructor() {
    this.models = new OrdersModel(connection);
  }

  public async getOrderAll(): Promise<IOrder[]> {
    const result = await this.models.getOrderAll();
    return result;
  }
}

export default OrderService;