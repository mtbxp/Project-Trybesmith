import { Response, NextFunction, Request } from 'express';
import status from '../utils/statusCode';

const usernameValidate = (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.body as { username: string };
  if (!username) {
    return res.status(status.HTTP_BAD_REQUEST)
      .json({ message: '"username" is required' });
  }
  next();
};

export default usernameValidate;
