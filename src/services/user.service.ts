import Tuser from '../interfaces/user.interface';
import UserModel from '../models/users.model';

class UserService {
  user;

  constructor() {
    this.user = new UserModel();
  }

  public async getByUsername(username: string): Promise<Tuser> {
    const user = await this.user.getByUsername(username);
    return user;
  }

  public async create(user: Tuser) {
    const { username, vocation, level, password } = user;
    await this.user.create({ username, vocation, level, password });
  }
}

export default UserService;