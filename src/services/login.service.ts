import { IUserName } from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class LoginService {
  public userModel = new UserModel();

  public async getUsers(username: string, password: string): Promise<IUserName[]> {
    const allUsers = await this.userModel.getByUsernameAndPassword(username, password);

    if (allUsers === null || allUsers.password !== password) {
      return res.status(201).json({ message: 'Username or password invalid' });
    }

    return allUsers;
  }
}