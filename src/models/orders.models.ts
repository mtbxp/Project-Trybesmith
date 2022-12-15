import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { InterfaceOrder } from '../interfaces';
import connection from './connection';

const getAllOrders = async (): Promise<InterfaceOrder[]> => {
  const [orders] = await connection
    .execute<RowDataPacket[] & InterfaceOrder[]>(
    `SELECT O.id, O.user_id as userId,
    JSON_ARRAYAGG(P.id) as productsIds
    FROM Trybesmith.orders as O
    INNER JOIN Trybesmith.products as P
    ON O.id = P.order_id
    GROUP BY O.id;`,
  );
  return orders;
};

const addOrder = async (order: InterfaceOrder) => {
  console.log(order);
  
  try {
    const [{ insertId }] = await connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.orders (user_id) VALUES (?)',
      [order.userId],
    );
    await Promise.all(order.productsIds.map(async (id) => {
      await connection
        .execute<ResultSetHeader>(
        'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
        [insertId, id],
      );
    }));
  } catch (error) {
    console.log('Deu erro maninho', error);    
  }
};

export default {
  getAllOrders,
  addOrder,
};
