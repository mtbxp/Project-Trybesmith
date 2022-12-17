import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Users, UsersLogin } from '../interface/users.interface';

const usersCreateModel = async (user: Users) => {
  const { username, vocation, level, password } = user;
  const result = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`,
    [username, vocation, level, password],
  );

  return result;
};

const usersGetModel = async (user: UsersLogin) => {
  const { username, password } = user;
  const [resultUsername] = await connection.execute<RowDataPacket[]>(
    ' SELECT username FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  const [resultPassword] = await connection.execute<RowDataPacket[]>(
    'SELECT password FROM Trybesmith.users WHERE password = ?',
    [password],
  );

  return { resultUsername, resultPassword };
};

export { usersCreateModel, usersGetModel };