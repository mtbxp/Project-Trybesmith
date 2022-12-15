import { Request, Response } from 'express';
import * as OrderService from '../services/orders.service';

export async function getAll(_req: Request, res: Response) {
  try {
    const orders = await OrderService.getAll();
    console.log(orders);

    return res.status(200).json(orders);
  } catch (err:unknown) {
    console.log(err);
  }
}

export function create() {

}