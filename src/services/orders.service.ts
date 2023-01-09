import IServices from '../interfaces/services.interface';
import { OrdersModel } from '../models';
import connection from '../models/connection';

export default class OrdersService {
  public ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel(connection);
  }

  public getAll = async (): Promise<IServices> => {
    const message = await this.ordersModel.getAll();

    return { type: null, message };
  };
}