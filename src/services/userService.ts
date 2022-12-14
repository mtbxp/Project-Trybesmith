import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { User, UserCredentials } from '../interfaces/userInterface';
import UserModel from '../models/userModel';

const config: object = {
  expiresIn: '6h',
  algorithm: 'HS256',
};

const secret = process.env.JWT_SECRET;

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel();
  }

  public async login(userCredentials: UserCredentials) {
    const payload = await this.model.getByUsername(userCredentials.username);

    if (payload === null || userCredentials.password !== payload.password) {
      return { status: 401, error: 'Username or password invalid' };
    }
    if (secret === undefined) {
      throw new Error('The JWT_SECRET env variable is required, please provide it');
    }
    const token = jwt.sign({ payload }, secret, config);
    return { status: 200, token };
  }

  public async create(user: User): Promise<User> {
    const payload = await this.model.create(user);
    if (secret === undefined) {
      throw new Error('The JWT_SECRET env variable is required, please provide it');
    }
    const token = jwt.sign({ payload }, secret, config);
    const data = { token, ...payload };

    return { ...data }; 
  }
}

export default UserService;