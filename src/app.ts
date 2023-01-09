import express from 'express';
import router from './routes/productRoutes';
import routerUser from './routes/userRoutes';
import routerOrder from './routes/orderRoutes';

const app = express();

app.use(express.json());
app.use(router);
app.use(routerUser);
app.use(routerOrder);
export default app;
