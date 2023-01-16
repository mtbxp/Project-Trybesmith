import { RowDataPacket } from 'mysql2/promise';
import { TOrder } from '../types';
import connection from './connection';

const getAll = async (): Promise<TOrder[]> => {
  const [rows] = await connection.execute <TOrder[] & RowDataPacket[]>(
    `SELECT O.id, O.user_id AS userId, json_arrayagg(P.id) AS productsIds
      FROM Trybesmith.orders AS O
      INNER JOIN Trybesmith.products AS P
      ON  P.order_id = O.id
      GROUP BY O.id;`,
  );
      
  return rows;
};

export default {
  getAll,
};