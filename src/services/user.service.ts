import { BadRequestError, UnprocessableEntityError, UnauthorizedError } from 'restify-errors';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import { Login, User } from '../interfaces/user.interface';
import { validateLogin, validateNewUser } from './validations/validateFields';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async checkUser(login: Login): Promise<User> {
    const message = await validateLogin(login);

    if (message !== null) {
      if (message.includes('required')) throw new BadRequestError(message);
      throw new UnprocessableEntityError(message);
    }

    const user = await this.model.getByUsername(login.username);

    if (!user || user.password !== login.password) {
      throw new UnauthorizedError('Username or password invalid');
    }

    return user;
  }

  public async create(user: User): Promise<User> {
    const message = await validateNewUser(user);

    if (message !== null) {
      if (message.includes('required')) throw new BadRequestError(message);
      throw new UnprocessableEntityError(message);
    }

    return this.model.create(user);
  }
}

export default UserService;