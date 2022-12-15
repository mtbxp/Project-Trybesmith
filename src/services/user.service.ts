import { BadRequestError, UnprocessableEntityError } from 'restify-errors';
import connection from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';
import { validateNewUser } from './validations/validateFields';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
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