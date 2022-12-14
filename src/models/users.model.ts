import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async addUsers(user: User): Promise<void> {
    const query = `INSERT INTO 
    Trybesmith.users (username, password, level, vocation) VALUES (?,?,?,?)`;
    const { username, password, level, vocation } = user;
    await this.connection.execute<ResultSetHeader>(query, [username, password, level, vocation]);
  }
}