import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { User } from '../interfaces/users.interface';
import connection from './connection';

const registerNewUserModel = async ({
  username,
  vocation,
  level,
  password,
}: User): Promise<User> => {
  const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
  VALUES (?, ?, ?, ?)`;

  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    query,
    [username, vocation, level, password],
  );

  return { id: insertId, username, vocation, level, password };
};

// const searchUsername = async (username: User): Promise<RowDataPacket[] & User[]> => {
//   const query = `SELECT *
//   FROM Trybesmith.users
//   WHERE username = (?)`;

//   const [[result]] = await connection.execute<RowDataPacket[] & User[]>(
//     query,
//     [username],
//   );

//   return result;
// };

const getAllUsers = async (): Promise<User[]> => {
  const query = 'SELECT * FROM Trybesmith.users';

  const [result] = await connection.execute<RowDataPacket[] & User[]>(query);

  return result;
};

export default {
  registerNewUserModel,
  // searchUsername,
  getAllUsers,
};
