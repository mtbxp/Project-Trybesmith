import JWT from '../auth/jwt';
import models from '../models';
import conn from '../models/connection';
import { Error, Login } from '../types';

const jwt = new JWT('secret');

export default class LoginService {
  public model;

  constructor() {
    this.model = new models.User(conn);
  }

  public async login({ username, password }: Login): Promise<Error> {
    const [payload] = await this.model.find({ username, password });
    if (!payload) {
      console.log(payload);
      return { error: true, message: 'Username or password invalid' };
    }
    const token = jwt.createToken({ ...payload });
    return { error: false, token };
  }
}