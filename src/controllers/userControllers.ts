import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import userServices from '../services/userServices';
import { TUsers } from '../types';

const secret = process.env.JWT_SECRET || '';

const tokenCreate = (user:TUsers) => {
  const { username } = user;

  const token = jwt.sign(username, secret);

  return token;
};
const userAdd = async (req: Request, res: Response) => {
  await userServices.userAdd(req.body);
  const token = tokenCreate(req.body);
  return res.status(201).json({ token });
};

export default {
  userAdd,
  tokenCreate,

};