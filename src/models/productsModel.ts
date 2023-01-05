import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IProduct from '../Interfaces/products.Interface';
import connection from './connection';

export async function getById(id: string | number): Promise<IProduct | undefined > {
  const sql = 'SELECT * FROM Trybesmith.products WHERE id = ?';

  const [rows] = await connection.execute<RowDataPacket[] & IProduct[]>(sql, [id]);
  return rows[0];
}

export async function create(product: IProduct) {
  const { name, amount } = product; 

  const sql = `
      INSERT INTO Trybesmith.products (NAME,AMOUNT) VALUES (?,?)
    `;
  const rows = await connection.execute<ResultSetHeader>(sql, [name, amount]);
  const idProductCreated = rows[0].insertId;
  const productCreated = await getById(idProductCreated);
  return productCreated;
}

export async function getProducts(): Promise<IProduct[] > {
  const sql = 'SELECT * FROM Trybesmith.products';

  const [rows] = await connection.execute<RowDataPacket[] & IProduct[]>(sql);
  return rows;
}
