import { Request, Response } from 'express';

import useService from '../services/products.service';

const insert = async (req: Request, res: Response): Promise<Response> => {
  const { type, message } = await useService.insert(req.body);
  return res.status(type).json(message);
};

export default {
  insert,
};
