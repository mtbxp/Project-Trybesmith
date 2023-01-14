import express from 'express';
import productRoutes from './routes/productRoutes';

const app: express.Application = express();
const PORT = 3000;

app.use(express.json);

app.use('/products', productRoutes);

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
