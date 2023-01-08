import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (newUser: IUser): Promise<IUser> => {
    const { username, vocation, level, password } = newUser;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)',
      [username, vocation, level, password],
    );

    return { id: insertId, ...newUser };
  };
}