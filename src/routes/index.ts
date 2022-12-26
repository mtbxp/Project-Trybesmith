import { Express } from 'express';
import productsRouter from './products.router';

const mainRouter = (app: Express) => {
  app.use(
    productsRouter,
  );
};

export default mainRouter;
