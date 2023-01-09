import IUser from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  public userModel = new UserModel();

  async userInsert(user: IUser): Promise<void> {
    await this.userModel.userInsert(user);
  }
}