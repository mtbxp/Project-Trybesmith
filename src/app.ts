import express from 'express';
import httpErrorMiddleware from './middlewares/http.error.middleware';
import procuctsRoute from './routes/products.routes';

const app = express();

app.use(express.json());

app.use('/products', procuctsRoute);

app.use(httpErrorMiddleware);

export default app;
