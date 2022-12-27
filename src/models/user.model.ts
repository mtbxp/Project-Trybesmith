import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/users.interface';

// funcoes retiradas do couse.
export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  // public async getAllProducts(): Promise<Product[]> {
  //   const result = await this.connection.execute('SELECT * FROM Trybesmith.products');
  //   const [rows] = result;
  //   return rows as Product[];
  // }

  public async registerUser(user: User): Promise<User> {
    const { username, vocation, level, password } = user;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, level, password) 
      VALUES (?, ?, ?, ?)`, [username, vocation, level, password]);
    return {
      id: insertId,
      ...user,
    };
  }
}
