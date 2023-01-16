import { Request, Response } from 'express';
import orderServices from '../services/orderServices';

const getAll = async (_req:Request, res:Response) => {
  const orders = await orderServices.getAll();
  console.log('controle', orders);
  return res.status(200).json(orders);
};

export default {
  getAll,
};