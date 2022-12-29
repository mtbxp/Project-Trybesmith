import { Express } from 'express';
import orderRoute from './order.route';
import productsRouter from './products.router';
import usersRouter from './user.router';

const mainRouter = (app: Express) => {
  app.use(
    productsRouter,
    usersRouter,
    orderRoute,
  );
};

export default mainRouter;
