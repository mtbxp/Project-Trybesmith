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

async function updateProducts(orderId: number | undefined, productId: number) {
  const query = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
  await connection.execute<ResultSetHeader>(query, [orderId, productId]);
  return productId;
}

async function addOrder(userId: number | undefined, productsIds: number[]) {
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [response] = await connection.execute<ResultSetHeader>(query, [userId]);
  await Promise.all(productsIds.map(async (item) => {
    await updateProducts(response.insertId, item);
  }));
  return { userId, productsIds };
}

export {
  addProd,
  getAllProds,
  getAllOrders,
  addOrder,
  updateProducts,
};
