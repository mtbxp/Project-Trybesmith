import express from 'express';
import registerProducts from './routes/registerProducts';

const app = express();

app.use(express.json());
app.use('/products', registerProducts);

export default app;
