import { RowDataPacket } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';

const getUser = async ({ username, password }: TUser): Promise<TUser[]> => {
  const [user] = await connection
    .execute<RowDataPacket[] & TUser[]>(
    'SELECT * FROM Trybesmith.users WHERE username = (?) AND password = (?)',
    [username, password],
  );
  return user;
};

export default { getUser };