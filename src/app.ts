import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import productsRoute from './routes/products.route';
import userRoute from './routes/user.route';
import authenticate from './middlewares/authenticate.middleware';

const app = express();

app.use(express.json());

app.post('/login', authenticate);

app.use('/products', productsRoute);
app.use('/users', userRoute);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;
  console.log(`name: ${name}`);
  switch (name) {
    case 'BadRequestError':
      res.status(400).json({ message });
      break;
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
});

export default app;