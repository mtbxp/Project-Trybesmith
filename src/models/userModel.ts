import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import { User } from '../helpers/types';

async function create(user: User) {
  const { username, vocation, level, password } = user;
  await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?);',
    [username, vocation, level, password],
  );
}

export default {
  create,
};
