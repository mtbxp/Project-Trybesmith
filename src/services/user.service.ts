import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import generateToken from '../auth/tokenGenerator';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: User) {
    await this.model.createUser(user);

    const token = generateToken(user);
    return token;
  }
}

export default UserService;
