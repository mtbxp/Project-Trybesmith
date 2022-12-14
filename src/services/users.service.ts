import connection from '../models/connection';
import Users from '../interfaces/users.interface';
import UserModel from '../models/users.model';
import createToken from '../auth/token';

class UserService {
  public model: UserModel;
  
  constructor() {
    this.model = new UserModel(connection);
  }

  public async createUser(user: Users): Promise<string> {
    const { username } = user;
    await this.model.createUser(user);
    const token = createToken(username);
    return token;
  }
}
  
export default UserService;