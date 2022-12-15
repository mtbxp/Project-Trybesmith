import { Request, Response} from 'express';
import insertProductService from '../services/products.service';

export default async function insertProductController(req: Request, res: Response) {
  const { name, amount } = req.body;
  const result = await insertProductService(name, amount);
  console.log(result);
  return res.status(201).json(result);
}
