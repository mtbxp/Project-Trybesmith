import { RowDataPacket } from 'mysql2';
import connection from './connection';

export default {
  findAll: async () => {
    const [result] = await connection.execute<RowDataPacket[]>(`
    SELECT O.id AS id, O.user_id AS userId, JSON_ARRAYAGG(P.id) AS productsIds 
      FROM Trybesmith.orders AS O
        INNER JOIN Trybesmith.products AS P ON P.order_id = O.id
      GROUP BY O.id
    `);

    return result;
  },
};