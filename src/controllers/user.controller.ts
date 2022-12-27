import { Request, Response } from 'express';
import { Secret } from 'jsonwebtoken';
import UserService from '../services/users.service';
import statusCodes from '../utils/statusCode';
import ConfigTokenUser from '../autenticadorToken/configToken';

// funcoes retiradas do couse.
const secret: Secret = process.env.JWT_SECRET || 'segredo';

export default class ProductsController {
  public userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.registerUser(user);

    const { id, username } = userCreated;

    const jwt = new ConfigTokenUser(secret);
    const token = jwt.createTokenUser({ id, username });

    res.status(statusCodes.CREATED).json({ token });
  };
}
