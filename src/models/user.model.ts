import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async userCreate(user: IUser): Promise<void> {
    const query = `INSERT INTO 
    Trybesmith.users (username, password, level, vocation) 
    VALUES (?,?,?,?)`;
    const { username, password, level, vocation } = user;
    await this.connection.execute<ResultSetHeader>(query, [username, password, level, vocation]);
  }
}