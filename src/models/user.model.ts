import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../types/User';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async registerUser(user: User) {
    const { username, vocation, level, password } = user;
    const [register] = await this.connection.execute<ResultSetHeader>(` INSERT INTO 
    Trybesmith.users (username, vocation, level, password) 
    VALUE (?, ?, ?, ?)`, [username, vocation, level, password]);
    return { id: register.insertId, username, level, password };
  }
}