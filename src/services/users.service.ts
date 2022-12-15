import connection from '../models/connection';
import UserModel from '../models/users.model';
import User from '../interfaces/users.interface';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: User): Promise<User> {
    const newUser = await this.model.create(user);
    return newUser;
  }
}