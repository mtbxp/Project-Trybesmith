import { Request, Response } from 'express';
import * as OrderService from '../services/orders.service';

export async function getAll(_req: Request, res: Response) {
  try {
    const orders = await OrderService.getAll();

    return res.status(200).json(orders);
  } catch (err:unknown) {
    console.log(err);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const { id } = req.body.use;
    const { productsIds } = req.body;
    const orders = await OrderService.create(id, productsIds);
    console.log('**order controller**', orders);

    return res.status(201).json(orders);
  } catch (err:unknown) {
    console.log(err);
  }
}