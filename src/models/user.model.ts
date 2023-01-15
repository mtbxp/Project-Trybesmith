import { Pool, ResultSetHeader } from 'mysql2/promise';
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
}

export default UserModel;
