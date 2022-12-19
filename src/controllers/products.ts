import { Request, Response } from 'express';
import Product from '../models/Product';

const registerProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  try {
    const newProduct = new Product(name, amount);
    const id = await newProduct.save();
    res.status(201).json({ id, name, amount });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await new Product('', '').getAll();
    res.status(200).json(products);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export { registerProduct, getAllProducts };