import UserModel from '../models/userModel';
import GenerateToken from '../ultils/generateToken';
import IUser from '../interface/IUser';

export default class UserService {
  userModel = new UserModel();

  genToken = new GenerateToken();

  async addUser(user: IUser): Promise<string> {
    await this.userModel.addUser(user);
    const result = await this.genToken.generateToken(user);
    return result;
  }
}