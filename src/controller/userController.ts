import { Request, Response } from 'express';
import { getAllSevice, userRegistrationService } from '../services/userServices';

export async function getAllController(_req: Request, res: Response) {
  const message = await getAllSevice();
  return res.status(200).json(message);
}

export async function userRegistrationController(req: Request, res: Response) {
  const { body } = req;
  const message = await userRegistrationService(body);
  return res.status(201).json({ token: message });
}