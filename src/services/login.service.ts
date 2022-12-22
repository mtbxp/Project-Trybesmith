import { RowDataPacket } from 'mysql2';
import model from '../models/login.model';

async function checkLoginService(username: string, password: string):
Promise<RowDataPacket[] | undefined> {
  const login = await model.checkLogin(username, password);

  console.log(login);

  if (!login.length) {
    throw new Error();
  }
  
  return login;
}

export default {
  checkLoginService,
};