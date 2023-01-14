import { ResultSetHeader } from 'mysql2';
import { User, UserPublic } from '../interfaces/User';
import connections from './connection';

const addNewUser = async (user: User): Promise<UserPublic> => {
  const { username, password, level, vocation } = user;
  const [{ insertId }] = await connections.execute<ResultSetHeader>(
    `
    INSERT INTO Trybesmith.users (username, password, level, vocation) VALUES (?,?,?,?)`,
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

export default {
  addNewUser,
};