import connection from '../models/connection';
import UserModel from '../models/users.model';
import { IUser } from '../interfaces';
import createToken from '../auth/jwtFunctions';

export default class UserService {
  public userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  public async create(product: IUser): Promise<string> {
    const createUser = await this.userModel.create(product);
    const { id, username } = createUser;
    const token = createToken({ id, username });
    return token;
  }
}