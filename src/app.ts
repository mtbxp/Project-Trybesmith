import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';
import OrdersRoutes from './routes/orders.routes';
import statusCodes from './utils/statusCodes';

const app = express();

app.use(express.json());

app.use(UsersRoutes);
app.use('/orders', OrdersRoutes);
app.use('/products', ProductsRoutes);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'BadRequestError': res
      .status(statusCodes.BAD_REQUEST).json({ message });
      break;
    case 'UnauthorizedError': res
      .status(statusCodes.UNAUTHORIZED).json({ message });
      break;
    case 'UnprocessableEntityError': res
      .status(statusCodes.UNPROCESSABLE).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

export default app;
