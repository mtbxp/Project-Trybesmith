import connection from '../models/connection';
import UserModel from '../models/users.model';
import { IUser, IUserResponse } from '../interfaces/users.interface';
import status from '../utils/statusCode';
import JWT from '../utils/JWT';

export default class UserService {
  private model;

  constructor() {
    this.model = new UserModel(connection);
  }

  public insert = async (
    { username, vocation, level, password }: IUser,
  ): Promise<IUserResponse<string>> => {
    const newUser = await this.model.insert({ username, vocation, level, password });
    const auth = new JWT();
    const token = auth.generateToken(newUser);

    return { type: status.HTTP_CREATED, message: token };
  };
}