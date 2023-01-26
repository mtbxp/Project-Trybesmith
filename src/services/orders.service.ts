import Order from '../interfaces/orders.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.models';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAll = async (): Promise<Order[]> => 
    this.model.getAll();
}
