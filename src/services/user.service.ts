import UserModel from '../models/user.model';
import connection from '../models/connection';
import { IUser } from '../interfaces/user.interface';
import { createToken } from '../auth/jwtFunctions';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(input: IUser): Promise<string> {
    const newUser = await this.model.createUser(input);
    const { password, ...userWithoutPassword } = newUser;
    const token = createToken(userWithoutPassword);
    return token;
  }
}