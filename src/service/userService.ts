import connection from '../models/connection';
import UsersModel from '../models/usersModel';
import { User } from '../interfaces';

export default class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async userCreated(user: User): Promise<User> {
    const userNew = await this.model.userCreated(user);

    return userNew;
  }
}