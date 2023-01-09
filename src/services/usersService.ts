import jwt from 'jsonwebtoken';
import UsersModel from '../models/usersModel';
import UserInterface from '../interfaces/users.ifc';
import TokenInterface from '../interfaces/tokens.ifc';

export default class UsersService {
  public newProduct = new UsersModel();

  async create(user: UserInterface): Promise<TokenInterface> {
    const registeredUser = this.newProduct.create(user);

    const secret: string = process.env.JWT_SECRET || 'secret';

    const token = jwt.sign({ data: registeredUser }, secret);

    return { token };
  }
}
