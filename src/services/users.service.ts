import connection from '../models/connection';
import UsersModel from '../models/users.model';
import User from '../interfaces/userInterface';
import createToken from '../Helper/tokenGenerator';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async registerUser(user: User): Promise<object> {
    const id = await this.model.registerUser(user);
    
    const token = createToken({ ...id, ...user });

    return token;
  }
}
