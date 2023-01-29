import { Request, Response } from "express";
import statuses from "../utils/statuses";
import productsService from "../services/products.service";

const getAllProducts = async (req: Request, res: Response) => {
  const allProducts = await productsService.getAllProducts();
  res.status(statuses.SUCCESSFUL_STATUS).json(allProducts);
};

export default { getAllProducts };
