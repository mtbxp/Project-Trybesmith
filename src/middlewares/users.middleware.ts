import { Request, Response, NextFunction } from 'express';

const validateUsername = (username: string) => {
  if (!username) {
    return { status: 400, message: '"username" is required' };
  }
  if (typeof username !== 'string') {
    return { status: 422, message: '"username" must be a string' };
  }

  if (username.length < 3) {
    return { status: 422, message: '"username" length must be at least 3 characters long' };
  }
  return null;
};

const validaVocation = (vocation: string) => {
  if (!vocation) {
    return { status: 400, message: '"vocation" is required' };
  }
  if (typeof vocation !== 'string') {
    return { status: 422, message: '"vocation" must be a string' };
  }

  if (vocation.length < 3) {
    return { status: 422, message: '"vocation" length must be at least 3 characters long' };
  }
  return null;
};

const validateLevel = (level: number) => {
  if (level <= 0) {
    return { status: 422, message: '"level" must be greater than or equal to 1' };
  }
  if (!level) {
    return { status: 400, message: '"level" is required' };
  }
  if (typeof level !== 'number') {
    return { status: 422, message: '"level" must be a number' };
  }
  return null;
};

const validatePassword = (password: string) => {
  if (!password) {
    return { status: 400, message: '"password" is required' };
  }
  if (typeof password !== 'string') {
    return { status: 422, message: '"password" must be a string' };
  }

  if (password.length <= 8) {
    return { status: 422, message: '"password" length must be at least 8 characters long' };
  }
  return null;
};

const userValidate = (req: Request, res: Response, next: NextFunction) => {
  const { username, vocation, level, password } = req.body;
  const usernameValidate = validateUsername(username);
  if (usernameValidate) {
    return res.status(usernameValidate.status).json({ message: usernameValidate.message });
  }
  const vocationValidate = validaVocation(vocation);
  if (vocationValidate) {
    return res.status(vocationValidate.status).json({ message: vocationValidate.message });
  }
  const levelValidate = validateLevel(level);
  if (levelValidate) {
    return res.status(levelValidate.status).json({ message: levelValidate.message });
  }
  const passwordValidate = validatePassword(password);
  if (passwordValidate) {
    return res.status(passwordValidate.status).json({ message: passwordValidate.message });
  }
  next();
};

export default userValidate;