import dotenv from 'dotenv';
import jwt, { Secret } from 'jsonwebtoken';
import UserService from '../services/user.service';

dotenv.config();
const userService = new UserService();

const secret = 'secret';

async function validate(token: string) {
  if (!token) {
    return { type: 401, message: 'Token não encontrado' };
  }

  try {
    const decoded = jwt.verify(token, secret as Secret);

    const info = decoded as any;

    const user = await userService.getByUsername(info.data.username) as any;
    console.log('validate', user);
    if (!user) {
      return { type: 401, message: 'Erro ao procurar usuário do token.' };
    }

    return user;
  } catch (err: any) {
    return { type: 401, message: err.message };
  }
}

export default validate;