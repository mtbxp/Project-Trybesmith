import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import User from '../interfaces/user.interface';

export default class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createNewUser(user: User): Promise<string> {
    const payload = await this.model.createNewUser(user);
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      algorithm: 'HS256', expiresIn: '1d',
    });
  }
}