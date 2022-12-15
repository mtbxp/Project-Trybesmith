import connection from '../models/connection';
import Users from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import tokenCreate from '../auth/token';

class UserServices {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async userCreate(user: Users): Promise<string> {
    const { username } = user;
    await this.model.userCreate(user);
    const token = tokenCreate(username);
    return token;
  }
}

export default UserServices;