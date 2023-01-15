import { Response, NextFunction, Request } from 'express';
import status from '../utils/statusCode';

const passwordValidate = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body as { password: string };
  if (!password) {
    return res.status(status.HTTP_BAD_REQUEST)
      .json({ message: '"password" is required' });
  }
  next();
};

export default passwordValidate;
