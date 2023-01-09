import { IUsersSecretData, IUsers } from '../interfaces/Users';
import connection from '../models/connection';
import UserModel from '../models/user.model';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUsersSecretData): Promise<IUsers> {
    const userCreated = await this.model.create(user);
    const { username, vocation, level } = userCreated;
    return { username, vocation, level };
  }
}

export default UserService;