import { Request, Response } from 'express';
import userService from '../services/user.service';
import jwtFunctions from '../auth/jwtFunctions';

const add = async (req: Request, res: Response) => {
  const newUserData = req.body;
  const userWithoutPassword = await userService.add(newUserData);
  const token = jwtFunctions.createToken(userWithoutPassword); 
  return res.status(201).send({ token });
};

export default { add };