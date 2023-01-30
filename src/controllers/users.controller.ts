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

  // public login = async (request: Request, response: Response): Promise<Response> => {
  //   try {
  //     const { username, password } = request.body;
  //     // const { statusCodes, message } = await this this.userService.login(username, password);
  //     if (statusCodes !== 200) {
  //       return response.status()
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return response.status(statusCodes.INTERNAL_SERVER_ERROR).json(error);
  //   }
  // };
}

export default UserController;