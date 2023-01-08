import IServices from '../interfaces/services.interface';
import IUser from '../interfaces/user.interface';
import { UsersModel } from '../models';
import connection from '../models/connection';

export default class UsersService {
  public usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel(connection);
  }

  public create = async (newUser: IUser): Promise<IServices> => {
    const message = await this.usersModel.create(newUser);

    return { type: null, message };
  };
}