import { createToken } from '../auth/jwtFunctions';
import { IUser, IUserReturn } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';

export default class UserService {
  userModel: UserModel;

  constructor() {
    this.userModel = new UserModel(connection);
  }

  async addUser(userData: IUser): Promise<IUserReturn> {
    const newUser = await this.userModel.addUser(userData);
    const { password, ...newUserWithoutPassword } = newUser;
    const token = createToken(newUserWithoutPassword);
    return { status: 201, message: token };
  }
}