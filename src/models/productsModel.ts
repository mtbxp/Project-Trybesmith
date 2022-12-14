import { ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import { Order, Product } from '../interfaces/interfaces';

const addProd = async (product: Product): Promise<Product> => {
  const { name, amount } = product;
  const [result] = await connection.execute <ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUE (?, ?)',
    [name, amount],
  );
  const { insertId } = result;
  // const response = { insertId, name, amount };
  // console.log(insertId, 'PM_____12');
  return { id: Number(insertId), name, amount };
};

const getAllProds = async () => {
  const [result] = await connection.execute <RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result as Product[];
};

const getAllOrders = async (): Promise<Order[]> => {
  const [result] = await connection.execute(
    `SELECT ord.id as id, ord.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as ord
    INNER JOIN Trybesmith.products as p
    ON p.order_id = ord.id
    GROUP BY ord.id`,
  );
  return result as Order[];
};

export {
  addProd,
  getAllProds,
  getAllOrders,
};
