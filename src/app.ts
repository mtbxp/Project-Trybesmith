import express from 'express';
import validateToken from './midleweres/validateToken';
import { addAProductService, getAllProductsService } from './services/products.services';
import { Iproduct } from './types';

const app = express();

app.use(express.json());

app.post('/products', async (req, res) => {
  const { name, amount } = req.body as Iproduct;
  const { newProduct, error, message } = await addAProductService(name, amount);
  if (error) return res.status(400).json({ message });
  return res.status(201).json(newProduct);
});

app.get('/products', async (req, res) => {
  const { allProducts, error, message } = await getAllProductsService();
  if (error) return res.status(400).json({ message });
  return res.status(200).json(allProducts);
});

app.post(
  '/users', 
  validateToken,
);

export default app;
