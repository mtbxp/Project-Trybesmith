import { ResultSetHeader } from 'mysql2';
import { User, UserWithPassword } from '../types/types';
import connection from './connection';

const productCadastro = async (user: UserWithPassword): Promise<User> => {
  console.log('model', user);

  const { username, password, level, vocation } = user;
  const banco = `INSERT INTO Trybesmith.users (username, password, level, vocation)  
  VALUES (?,?,?,?)`;
  const [response] = await connection
    .execute<ResultSetHeader>(banco, [username, password, level, vocation]);

  const userWithoutPassword = { id: response.insertId, username, level, vocation };
  return userWithoutPassword;
};

export default {
  productCadastro,
};