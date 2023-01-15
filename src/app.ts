import express from 'express';
import router from './routes/product.router';

const app = express();

app.use(express.json());

// Rotas
app.use('/products', router);

export default app;
