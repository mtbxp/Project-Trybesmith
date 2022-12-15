import { Request, Response } from 'express';

const createProduct = async (_req: Request, res: Response): Promise<void> => {
  res.status(201).json();
};

export default { createProduct };