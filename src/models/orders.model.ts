import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { ProductsIds } from '../types';
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

  create: async (productsIds: ProductsIds, userId: number) => {
    const [orderResult] = await connection.execute<ResultSetHeader>(`
      INSERT INTO Trybesmith.orders (user_id) 
        VALUES (?)
    `, [userId]);

    const { insertId } = orderResult;
    
    if (insertId) {
      const results = productsIds.map(async (id) => {
        const [result] = await connection.execute<ResultSetHeader>(`
          UPDATE Trybesmith.products
            SET order_id = ?
          WHERE id = ?
        `, [insertId, id]);
  
        return result.affectedRows;
      });
  
      const affectedRowsArray = await Promise.all(results);

      if (affectedRowsArray.every((el) => el)) return { userId, productsIds };
    }
  },
};