import { Request, Response } from 'express';
import UserService from '../services/user.service';
import statusCodes from '../statusCodes';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (request: Request, response: Response) => {
    try {
      const user = request.body;
      const createUser = await this.userService.create(user);
      const { token } = createUser;

      response.status(statusCodes.CREATED).json({ token });
    } catch (error) {
      console.log(error);
      return response.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
  };
}

export default UserController;