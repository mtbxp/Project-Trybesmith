import createToken from '../auth/jwt';
import connection from '../models/connection';
import UserModel from '../models/userModel';
import { User, NewUser } from '../utils/interfaces/userInterface';

export default class UserService {
  constructor(public model = new UserModel(connection)) { }

  public create = async (user: User): Promise<string> => {
    const newUser = await this.model.create(user);
    const userToken = createToken<NewUser>(newUser);

    return userToken;
  };
}
