import models from '../models';
import conn from '../models/connection';
import { Error, User } from '../types';
import JWT from '../auth/jwt';

const jwt = new JWT('secret');

export default class UserService {
  public model;

  constructor() {
    this.model = new models.User(conn);
  }

  public async post(user: User): Promise<Error> {
    const payload = await this.model.post(user);
    if (!payload) {
      return { error: true, message: 'User not created' };
    }
    const token = jwt.createToken(payload);
    return { token, error: false };
  }
}