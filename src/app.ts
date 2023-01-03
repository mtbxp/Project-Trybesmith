import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import routers from './routers';
import HttpError from './utils/errors';

const app = express();

app.use(express.json());

app.use(routers.usersRouter);
app.use('/products', routers.productsRouter);
app.use('/orders', routers.ordersRouter);

app.use((error: HttpError, _req: Request, res: Response, _next: NextFunction) => {
  res.status(error.statusCode).json({ message: error.message });
});

export default app;
