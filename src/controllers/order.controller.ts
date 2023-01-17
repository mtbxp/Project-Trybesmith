import { Request, Response } from 'express';
import User from '../interfaces/user.interface';
import OrderService from '../services/order.service';
import ProductService from '../services/product.service';
import UserService from '../services/user.service';
import Decode from '../tokens/decode';

class OrderController {
  constructor(
    private orderService = new OrderService(), 
    private productService = new ProductService(), 
    private userService = new UserService(),
  ) {}

  public getAll = async (_: Request, response: Response) => {
    const orders = await this.orderService.getAll();

    return response.status(200).send(orders);
  };

  public create = async (request: Request, response: Response) => {
    const { productsIds } = request.body as { productsIds: number[] };

    const token = request.header('Authorization') as string;

    const { user } = Decode.decode(token) as { user: User };

    const { id: userId } = await this.userService.findByUsername(user as User);

    const id = await this.orderService.create(userId as number);

    await this.productService.update(productsIds, id);

    return response.status(201).json({ userId, productsIds });
  };
}

export default OrderController;
