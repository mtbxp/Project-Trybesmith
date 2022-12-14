import express from 'express';
import router from './routes/productRouter';

const app = express();

app.use(express.json());
app.use('/products', router);

export default app;
