import express, { Application } from 'express';
import 'express-async-errors';

// import httpErrorMiddleware from '';
import productRouter from './routes/product.route';
import userRouter from './routes/user.route';

const app: Application = express();

app.use(express.json());

app.use('/products', productRouter);
app.use('/users', userRouter);

// app.use(httpErrorMiddleware);

export default app;
