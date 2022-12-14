import { RowDataPacket } from 'mysql2';
import { Orders } from '../interfaces';
import connection from './connection';

const TABLE = 'Trybesmith.orders';

export async function getAll(): Promise<Orders> {
  const query = `SELECT * FROM ${TABLE}`;

  const [result] = await connection.execute<RowDataPacket[] & Orders>(query);

  return result;
}

export async function oi() {
  return 'oi';
}