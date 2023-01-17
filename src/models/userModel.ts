import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User, NewUser } from '../utils/interfaces/userInterface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (newUser: User): Promise<NewUser> => {
    const { username, vocation, level, password } = newUser;

    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return { id, username };
  };
}
