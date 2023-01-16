import pool from '../models/connection';
import UserModel from '../models/user.model';
import User from '../interfaces/user.interface';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(pool);
  }

  public async create(user: User): Promise<User> {
    const result = await this.model.create(user);

    return result;
  }

  public async findByUsername(user: User): Promise<User | undefined> {
    const data = await this.model.findByUsername(user);

    return data;
  }
}

export default UserService;
