import express from 'express';
import productsRoute from './routes/productsRoute';

const app = express();

app.use(express.json());

app.use(productsRoute);

export default app;
//
