import { Request, Response } from 'express';
import service from '../services/user.service';

const getAllUsers = async (_req: Request, res: Response) => {
  const allUsers = await service.getAllUsers();
  return res.status(200).json(allUsers);
};

const getUserByUsername = async (req: Request, res: Response) => {
  const { params: { name } } = req; 
  const user = await service.getUserByUsername(name);
  return res.status(200).json(user);
};

const addNewUser = async (req: Request, res: Response) => {
  const { body } = req;
  const token = await service.addNewUser(body);
  return res.status(201).json({ token });
};

export default {
  addNewUser,
  getAllUsers,
  getUserByUsername,
};