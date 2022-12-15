import jwt from 'jsonwebtoken';
import { Login } from '../interfaces';
import LoginModel from '../models/loginModel';
import statusCodes from '../statusCodes';

const loginModel = new LoginModel();

export default class LoginService {
  login = async (loginBody: Login) => {
    const [data] = await loginModel.login(loginBody);

    const isPasswordValid = data?.password === loginBody.password;

    if (!data || !isPasswordValid) {
      return { status: statusCodes.INVALID, data: { message: 'Username or password invalid' } };
    }

    const id = await loginModel.login(loginBody);

    const payload = { id, username: data.username };
    const JWT_SECRET = process.env.JWT_SECRET || 'secretKey';
    const config = { expiresIn: '1d' };

    const token = jwt.sign(payload, JWT_SECRET, config);

    return { status: statusCodes.OK, data: { token } };
  };
}