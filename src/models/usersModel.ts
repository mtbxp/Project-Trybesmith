import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/interfaces';

const createUser = async (user: User) => {
  const { username, vocation, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUE (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const { insertId } = result;
  // const response = { insertId, name, amount };
  // console.log(insertId, 'PM_____12');
  return { id: Number(insertId), user };
};

const login = async () => {
};

export {
  createUser,
  login,
};
