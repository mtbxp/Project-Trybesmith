import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UsersModel from '../models/users.model';
import User from '../interfaces/user.interface';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  static generateToken(user: User) {
    const payload = { username: user.username, vocation: user.vocation, level: user.level };
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      algorithm: 'HS256', expiresIn: '1d',
    });
  }

  public async createUser(user: User) {
    await this.model.createUser(user);
    const token = UsersService.generateToken(user);
    return token;
  }
}