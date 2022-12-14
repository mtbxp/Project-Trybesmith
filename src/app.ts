import express from 'express';
import ItemsRoutes from './routes/itemsRoutes';
import UsersRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());

app.use(ItemsRoutes);
app.use(UsersRoutes);

export default app;
