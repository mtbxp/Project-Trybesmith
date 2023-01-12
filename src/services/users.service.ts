import connection from '../models/connection';
import UserModel from '../models/users.model';
import { IUser, IUserResponse } from '../interfaces/users.interface';
import status from '../utils/statusCode';

export default class UserService {
  private model;

  constructor() {
    this.model = new UserModel(connection);
  }

  public insert = async (
    { username, vocation, level, password }: IUser,
  ): Promise<IUserResponse<IUser>> => {
    const newUser = await this.model.insert({ username, vocation, level, password });

    return { type: status.HTTP_CREATED, message: newUser };
  };
}