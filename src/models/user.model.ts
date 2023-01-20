import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IUser, User } from '../interfaces';
import connection from './connection';

const create = async (user: IUser): Promise<number> => {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
      VALUES (?, ?, ?, ?)`;
  const values = [username, vocation, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  return id;
};

const getByUsername = async (username : string): Promise<User | undefined> => {
  const query = `SELECT * FROM Trybesmith.users
    WHERE username = ?;`;
  const values = [username];
  const [rows] = await connection.execute<RowDataPacket[] & User[]>(query, values);
  return rows[0] || undefined;
};

export default {
  create,
  getByUsername,
};
