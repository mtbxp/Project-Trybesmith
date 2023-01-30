import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const { authorization: token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' }); 
  } 
  try {
    const user = jwt.verify(token as string, process.env.JWT_SECRET as string);    
    // console.log(req.body);
    // console.log(user);
    req.body.user = user;
    // const infos = { userId: req.body.user.id, productsIds: req.body.productsIds };
    // req.body = infos;
    console.log(req.body);
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' }); 
  }
};

const validadeProducts = async (req: Request, res: Response, next: NextFunction) => {
  const product = req.body;
  if (!product.productsIds) return res.status(400).json({ message: '"productsIds" is required' }); 
  if (!Array.isArray(product.productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' }); 
  }
  if (product.productsIds.length === 0 || !product.productsIds.every(
    (element: number | string) => typeof element === 'number',
  )) {
    return res.status(422).json(
      { message: '"productsIds" must include only numbers' },
    ); 
  }
  next();
};

export default {
  validateAuth,
  validadeProducts,
};
