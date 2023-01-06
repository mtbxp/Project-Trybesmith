import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUsersSecretData, IUsers } from '../interfaces/Users';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUsersSecretData): Promise<IUsers> {
    const { username, vocation, level, password } = user;
    
    await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );
    
    return { ...user };
  }
}