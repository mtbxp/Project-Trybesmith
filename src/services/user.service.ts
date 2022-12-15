import IUser from '../interfaces/IUser';
import UserModel from '../models/user.model';

export default class UserService {
  public userModel = new UserModel();
  
  async insertUser(user: IUser): Promise<void> {
    await this.userModel.insertUser(user);
  }
}
