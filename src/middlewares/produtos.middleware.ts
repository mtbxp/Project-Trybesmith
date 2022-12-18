import { Request, Response, NextFunction } from 'express';

const validaName = (name: string) => {
  if (!name) {
    return { status: 400, message: '"name" is required' };
  }
  if (typeof name !== 'string') {
    return { status: 422, message: '"name" must be a string' };
  }

  if (name.length < 3) {
    return { status: 422, message: '"name" length must be at least 3 characters long' };
  }
  return null;
};

const validaAmount = (amount: string) => {
  if (!amount) {
    return { status: 400, message: '"amount" is required' };
  }
  if (typeof amount !== 'string') {
    return { status: 422, message: '"amount" must be a string' };
  }

  if (amount.length < 3) {
    return { status: 422, message: '"amount" length must be at least 3 characters long' };
  }
  return null;
};

const produtoValidate = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const nameValidado = validaName(name);
  if (nameValidado) {
    return res.status(nameValidado.status).json({ message: nameValidado.message });
  }
  const amountValidado = validaAmount(amount);
  if (amountValidado) {
    return res.status(amountValidado.status).json({ message: amountValidado.message });
  }
  next();
};

export default produtoValidate;