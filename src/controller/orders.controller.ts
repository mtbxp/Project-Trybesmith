import { Request, Response } from 'express';
import service from '../services/orders.service';
import { TOrder } from '../types';

async function createOrderController(_req: Request, res: Response):Promise<Response<TOrder[]>> {
  try {
    const user = await service.createOrderService();

    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    return res.status(404).json('Deu ruim no order controller');
  }
}

export default {
  createOrderController,
};