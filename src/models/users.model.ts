import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/users.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public insert = async (user: IUser): Promise<IUser> => {
    const { username, vocation, level, password } = user;
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    const { insertId } = result;
    return { id: insertId, ...user };
  };

  public async login(user: string, password: string): Promise<IUser[]> {
    const [users] = await this.connection.execute(`
      SELECT * FROM Trybesmith.users 
      WHERE username = ? AND password = ?`, [user, password]);

    return users as IUser[];
  }
}
