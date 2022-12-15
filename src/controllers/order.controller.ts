import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IUser, OrderService } from '../interfaces';
import * as orderService from '../services/order.service';
import orderCheck from '../middlewares/orderVerification';
import { secret } from '../middlewares/jwtConfig';

export async function getAll(_req: Request, res: Response) {
  const teste = await orderService.getAll();

  const { status, result } = teste as OrderService;

  res.status(status).json(result);
}

export async function create(req: Request, res: Response) {
  const { error } = orderCheck(req.body);
  const statusCode = error && /"\w.*" is required/.test(error.message)
    ? 400 : 422;
  if (error) return res.status(statusCode).json({ message: error.message });

  const { authorization: token } = req.headers;
  const { productsIds } = req.body;

  const abc = jwt.verify(token as string, secret) as IUser;

  const { status, result } = await orderService.create(abc.id, productsIds);

  res.status(status).json(result);
}