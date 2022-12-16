import { RowDataPacket } from 'mysql2/promise';
import { TProduct, TProductOrder } from '../types';
import connection from './connection';

export async function getAll(): Promise<TProduct[]> {
  const [products] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products;',
  );
    
  return products;
}

export async function getAllOrders(): Promise<TProductOrder[]> {
  const [orders] = await connection.execute<RowDataPacket[] & TProductOrder[]>(
    `SELECT
      o.id,
      o. user_id as userId,
      p.id as productId,
      p.order_id as orderId
    FROM
      Trybesmith.products AS p
    INNER JOIN
      Trybesmith.orders AS o ON o.id = p.order_id
    ORDER BY id`,
  );
    
  return orders;
}
  
// const getById = async (id) => {
//   const [result] = await connection.execute(
//     'SELECT * FROM StoreManager.products WHERE id = (?)', 
//     [id],
//   );
  
//   return result;
// };
  
export async function insertProduct({ name, amount }: TProduct) {
  await connection.execute(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
}

// const updateById = async (id, { name }) => connection.execute(
//   'UPDATE StoreManager.products SET name = (?) WHERE id = (?)',
//   [name, id],
// );

// const deleteById = (id) => connection.execute(
//   'DELETE FROM StoreManager.products WHERE id = (?)', [id],
// );

// module.exports = {
//   getAll,
//   getById,
//   insertProduct,
//   updateById,
//   deleteById,
// };