import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';
import OrdersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', ProductsRoutes);
app.use('/users', UsersRoutes);
app.use('/orders', OrdersRoutes);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err as any;
  console.log(`name: ${name}`);

  switch (name) {
    case 'BadRequestError': res.status(400).json({ message });
      break;
    case 'NotFoundError': res.status(404).json({ message });
      break;
    case 'ConflictError': res.status(409).json({ message });
      break;
    case 'UnprocessableEntityError': res.status(422).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
});

export default app;
