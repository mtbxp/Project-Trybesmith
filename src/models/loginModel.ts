import { RowDataPacket } from 'mysql2/promise';
import { TLogin } from './allInterfaces/interfaceLogin';
import { TUser } from './allInterfaces/interfaceUser';
import connection from './connection';

const loginModel = async (loginData: TLogin): Promise<TUser[]> => {
  const { username, password } = loginData;
  const [result] = await connection.execute<RowDataPacket[] & TUser[]>(
    'SELECT id, username FROM Trybesmith.users WHERE username = ? AND password = ?',
    [username, password],
  );
  return result;
};

export default { loginModel };