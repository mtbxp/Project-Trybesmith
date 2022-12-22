import { Request, Response } from 'express';
import service from '../services/users.service';
import generateToken from '../utils/token';

async function createUserController(req: Request, res: Response) {
  try {
    const { username, vocation, level, password } = req.body;
    await service.createUserService(username, vocation, level, password);
    const token = generateToken(username);

    return res.status(201).json({ token });
  } catch (e) {
    return res.status(404).json('Deu ruim no user controller');
  }
}

export default {
  createUserController,
};