import UsersModel from '../models/users.model';
import User from '../interfaces/user.interface';
import connection from '../models/connection';

export default class ProductService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: User): Promise<User> {
    const createdUser = await this.model.create(user);
    return createdUser;
  }
}
