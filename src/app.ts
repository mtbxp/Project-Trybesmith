import express from 'express';
import ItemsRoutes from './routes/itemsRoutes';

const app = express();

app.use(express.json());

app.use(ItemsRoutes);

export default app;
