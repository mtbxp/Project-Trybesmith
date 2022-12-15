import { Request, Response } from 'express';
import productsService from '../services/productsService';

// const getProductById = async (req, res) => {
//   const { id } = req.params;
//   const { type, message } = await productService.getProductById(id);
//   if (type) return res.status(type).json({ message });

//   return res.status(200).json(message);
// };

const getAllProducts = async (_req: Request, res: Response) => {
  const products = await productsService.getAllProducts();
  res.status(200).json(products);
};

// const addProduct = async (req, res) => {
//   const newProduct = req.body;
//   const { id } = req.params;
//   const { type, message } = await productService.addProduct(id, newProduct);

//   if (type) return res.status(type).json({ message });
//   res.status(200).json(message);
// };

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const result = await productsService.insertProduct(product);
  return res.status(201).json(result);
};

// const updateProduct = async (req, res) => {
//   const product = req.body;
//   const { id } = req.params;
//   const { type, message } = await productService.updateProduct(id, product);

//   if (type) return res.status(type).json({ message });

//   res.status(200).json(message);
// };

// const deleteProduct = async (req, res) => {
//   const { id } = req.params;
//   const { type, message } = await productService.deleteProduct(id);

//   if (type) return res.status(type).json({ message });

//   res.status(204).json();
// };

export default { getAllProducts, insertProduct };
