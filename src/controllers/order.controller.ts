import { Request, Response } from 'express';
import OrderService from '../services/order.service';
import statusCodes from '../utils/statusCodes';

export default class OrderController {
  constructor(private orderService = new OrderService()) {}

  // private orderService: OrderService;

  // constructor() {
  //   this.orderService = new OrderService();
  // }

  public getAllOrders = async (_req: Request, res: Response) => {
    try {
      const allOrders = await this.orderService.getAllOrders();
      return res.status(statusCodes.OK).json(allOrders);
    } catch (e) {
      const erro = (e as Error).message;
      return res.status(statusCodes.INTERNAL_ERROR).json({
        message: 'Erro ao retornar todos os pedidos',
        erro,
      });
    }
  };
}