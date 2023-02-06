import User from '../interfaces/users.interface';
import connection from '../models/connection';
import OrdersModel from '../models/orders.models';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public getAll = async () => 
    this.model.getAll();

  public create = async (user: User, productsId: number[]) => 
    this.model.create(user, productsId);
}
