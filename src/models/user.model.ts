import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import User from '../interfaces/user.interface';

class UserModel {
  public pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  public async create(user: User): Promise<User> {
    const { username, vocation, level, password } = user;

    await this.pool.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    return { username, vocation, level };
  }

  public async findByUsername(user: User): Promise<User | undefined> {
    const { username } = user;

    const [[data]] = await this.pool.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.users WHERE username = ?', 
      [username],
    );

    return data as User | undefined;
  }
}

export default UserModel;
