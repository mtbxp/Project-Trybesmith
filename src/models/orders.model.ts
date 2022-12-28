import { Iorders } from '../interfaces';
import connection from './connection';

// eslint-disable-next-line import/prefer-default-export
export async function getAll(): Promise<Iorders[]> {
  const [orders] = await connection.execute(
    'SELECT * FROM Trybesmith.orders',
  );
  return orders as Iorders[];
}

// export {
//   getAll,
// };