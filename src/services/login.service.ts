import model from '../models/login.model';
import { TLogin } from '../types';

async function checkLoginService(username: string, password: string):Promise<TLogin> {
  const login = await model.checkLogin(username, password);

  return login;
}

export default {
  checkLoginService,
};