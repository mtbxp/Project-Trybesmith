import express, { Application } from 'express';
import 'express-async-errors';

// import httpErrorMiddleware from '';
import productRouter from './routes/products.route';

const app: Application = express();

app.use(express.json());

app.use('/products', productRouter);

// app.use(httpErrorMiddleware);

export default app;
