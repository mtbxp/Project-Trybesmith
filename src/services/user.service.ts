import jwt from 'jsonwebtoken';
import Users from '../interfaces/users.interface';
import UserModel from '../models/users.model';
import { secret, config } from '../middlewares/jwtConfig';

class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async create(user: Users) {
    const payload = await this.model.create(user);
    const token = jwt.sign({ payload }, secret, config);
    const data = { token, ...payload };
    return data;
  }
}

export default UserService;
