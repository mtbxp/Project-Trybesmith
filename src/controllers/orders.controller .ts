import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as ordersService from '../services/orders.service';

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const validaToken = async (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers;
  if (!authorization) return response.status(401).json({ message: 'Token not found' });
  let temToken;
  try {
    temToken = jwt.verify(authorization, secret) as any;
    request.userId = temToken;
    return next();
  } catch (e) {
    return response.status(401).json({ message: 'Invalid token' });
  }
};

const validaCampoProdutos = async (request: Request, response: Response, next: any) => {
  const { productsIds } = request.body;
  
  if (!productsIds) return response.status(400).json({ message: '"productsIds" is required' });
  if (!Array.isArray(productsIds)) {
    return response.status(422).json({ message: '"productsIds" must be an array' });
  }
  if (!productsIds[0]) {
    return response.status(422)
      .json({ message: '"productsIds" must include only numbers' });
  }
  next();
};

const addOrder = async (request: Request, response: Response) => {
  const { id } = request.userId;
  const { productsIds } = request.body;
  console.log('userID', id);
  await ordersService.addOrder(id, request.body);
  response.status(201).json({ userId: id, productsIds });
};

const listAllOrders = async (_request: Request, response: Response) => {
  const orders = await ordersService.listAllOrders();
  response.status(200).json(orders);
};

export {
  addOrder,
  listAllOrders,
  validaToken,
  validaCampoProdutos,
};