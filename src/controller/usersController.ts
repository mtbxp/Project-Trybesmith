import { Request, Response } from 'express';
import userService from '../services/usersServices';
import jwtFunctions from '../auth/jwtAuthetication';

const addUserController = async (req: Request, res: Response) => {
  const newUserData = req.body;
  const userWithoutPassword = await userService.addUserService(newUserData);
  const token = jwtFunctions.createToken(userWithoutPassword); 
  return res.status(201).send({ token });
};

export default { addUserController };