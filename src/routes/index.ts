import { Express } from 'express';
import productsRouter from './products.router';
import usersRouter from './user.router';

const mainRouter = (app: Express) => {
  app.use(
    productsRouter,
    usersRouter,
  );
};

export default mainRouter;
