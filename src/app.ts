import express from 'express';
import { validateloginFormat } from './midleweres/validations';
import { addAProductService, getAllProductsService } from './services/products.services';
import { registerNewUser, verifyLoginService } from './services/users.services';
import { Iproduct } from './types';

const app = express();

app.use(express.json());

app.post('/users', async (req, res) => {
  const newUser = req.body;
  const { token, error, message } = await registerNewUser(newUser);
  if (error) return res.status(401).json({ message });
  return res.status(201).json({ token });
});

app.post('/login', validateloginFormat, async (req, res) => {
  const userLogin = req.body;
  const { token, error, message } = await verifyLoginService(userLogin);
  if (error) return res.status(401).json({ message });
  return res.status(200).json({ token });
});

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

export default app;
