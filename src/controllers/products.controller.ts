import { Request, Response } from 'express';
import { Tproducts } from '../models/interfaces';
import productsService from '../services/products.service';

const addNewProduct = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const newProduct: Tproducts = {
    name,
    amount,
  };  
  const newProductAdded = await productsService.addNewProduct(newProduct);
  res.status(201).json(newProductAdded);
};

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();  
  res.status(200).json(allProducts);
};

export default { addNewProduct, getAllProducts };