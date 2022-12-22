import express from 'express';
import routes from './Routers/products.route';

const app = express();

app.use(express.json());
// app.use('/products', routes.productsRoute);
app.use(routes);

export default app;
