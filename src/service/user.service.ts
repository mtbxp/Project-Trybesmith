import connection from '../models/connection';
import UserModel from '../models/user.model';
import { User } from '../types/User';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async registerUser(user: User) { 
    const newUser = await this.model.registerUser(user);
    return newUser;
  }
}