import express from 'express';
import productRouter from './routes/productRoutes';

const app = express();

app.use(express.json());

// app.get('/', (req, res) => insertController.getAll(req, res));
app.use('/products', productRouter);

export default app;
