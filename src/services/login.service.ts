import jwt from 'jsonwebtoken';
import Login from '../interfaces/login.interface';
import { secret } from '../middlewares/jwtConfig';
import getByUsername from '../models/login.model';
import statusCodes from '../statusCodes';

const generateToken = (payload: object) => {
  const token = jwt.sign({ date: payload }, secret);
  return token;
};

const loginCheck = async (login: Login) => {
  const result = await getByUsername(login);
  if (!result[0]) {
    return {
      status: statusCodes.UNAUTHORIZED,
      date: {
        message: 'Username or password invalid',
      },
    };
  }
  const token = generateToken(result[0]);
  return { status: statusCodes.OK, date: { token } };
};

export default loginCheck;