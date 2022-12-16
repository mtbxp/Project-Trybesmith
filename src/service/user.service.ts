import connection from '../models/connection';
import IUser from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import createToken from '../auth/createToken';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async create(user: IUser) {
    const { username, vocation, level } = user;
    const userId = await this.model.create(user);
    const newUser = { id: userId, username, vocation, level };
    const token = createToken(newUser);
    return token;
  }
}