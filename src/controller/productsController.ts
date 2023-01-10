import { Request, Response } from 'express';
import { productsRegistrationService } from '../services/productsServices';

const productsRegistrationController = async (req: Request, res: Response) => {
  const { body } = req;
  const message = await productsRegistrationService(body);
  const returnMessage = {
    id: message,
    name: body.name,
    amount: body.amount,
  };
  return res.status(201).json(returnMessage);
};

// const productsListController = async (req: object, res: any) => {
//   const message = await productsService();
//   return res.status(201).json(message);
// };

export { productsRegistrationController };