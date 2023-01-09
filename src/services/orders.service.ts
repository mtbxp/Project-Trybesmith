import { IOrders } from '../interfaces/Orders';
import connection from '../models/connection';
import OrdersModel from '../models/orders.model';

class OrdersService {
  public ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    console.log('entrou na camada service');
    const orders = await this.ordersModel.findAll();

    return orders;
  }
}

export default OrdersService;