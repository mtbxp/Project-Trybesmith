import { Request, Response } from 'express';
import { productsRegistrationService, getProductsService } from '../services/productsServices';

export async function productsRegistrationController(req: Request, res: Response) {
  const { body } = req;
  const message = await productsRegistrationService(body);
  const returnMessage = {
    id: message,
    name: body.name,
    amount: body.amount,
  };
  return res.status(201).json(returnMessage);
}

export async function getProductsController(_req: Request, res: Response) {
  const message = await getProductsService();
  return res.status(200).json(message);
}
