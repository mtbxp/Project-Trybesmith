import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/users.interface';

export default class ProductModel {
  public connection: Pool;
    
  constructor(connection: Pool) {
    this.connection = connection;
  }
    
  public async createUser(user: Users): Promise<Users> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password ) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    return { id: insertId, ...user };
  }
}