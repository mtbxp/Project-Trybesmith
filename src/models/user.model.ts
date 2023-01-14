import { ResultSetHeader } from 'mysql2';
import { IUser, IUserName } from '../interfaces/IUser';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  async insertUser(user: IUser): Promise<void> {
    const { username, vocation, level, password } = user;
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
  }

  async getByUsernameAndPassword(username: string, password: string): Promise<IUserName[]> {
    const [rows] = await this.connection.execute(
      'SELECT * FROM Trybesmith.users WHERE username = (?)AND password = (?)',
      [username, password],
    );

    return rows as IUserName[];
  }
}