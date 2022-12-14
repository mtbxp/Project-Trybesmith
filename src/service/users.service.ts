import User from '../interfaces/users.interface';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import createToken from '../auth/token';

class UserService {
  public models: UsersModel;

  constructor() {
    this.models = new UsersModel(connection);
  }

  public async addUsers(user: User): Promise<string> {
    const { username } = user;
    await this.models.addUsers(user);
    const validate = createToken(username);
    return validate;
  }
}

export default UserService;