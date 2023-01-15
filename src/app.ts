import express from 'express';
import produtosRouter from './routes/produtos.routes';

const app = express();

app.use(express.json());
app.use('/products', produtosRouter);

export default app;
