import UserModel from '../models/user.model';
import User from '../interfaces/users.interface';
import connection from '../models/connection';

// funcoes retiradas do couse.

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public registerUser(user: User): Promise<User> {
    return this.model.registerUser(user);
  }
}
