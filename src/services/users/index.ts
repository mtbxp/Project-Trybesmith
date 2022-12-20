import { Request, Response } from 'express';  
import insertUserModel from '../../models/users';
import generateUserToken from '../../middlewares/generateUserToken.middleware';

const insertUserService = async (req: Request, _res: Response) => {
  const { username, vocation, level, password } = req.body;
  const insertId = await insertUserModel(username, vocation, level, password);
  const token = await generateUserToken(username, vocation, level, insertId);
  return token;
};

export default insertUserService;