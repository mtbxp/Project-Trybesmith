import jwt from 'jsonwebtoken';
import { ILoginWithoutPassword, IUserWithoutPassword } from '../interfaces/index';

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig = {
  expiresIn: '15min',
};

// Estrutura baseada no código da aula 6.4, disponível em https://github.com/tryber/sd-023-b-live-lectures/tree/back/lecture/6.4/src/auth

export const createToken = (data: IUserWithoutPassword | ILoginWithoutPassword) => {
  const token = jwt.sign({ data }, secret, jwtConfig);
  
  return token;
};

export const verifyToken = (authorization: string) => {
  try {
    const payload = jwt.verify(authorization, secret);

    return payload;
  } catch (error) {
    return { isError: true, error };
  }
};