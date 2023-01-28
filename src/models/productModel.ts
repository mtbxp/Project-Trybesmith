import { ResultSetHeader, RowDataPacket } from 'mysql2'; 
import Product from '../types/Product';
import connection from './connection';

const addProduct = async ({ name, amount }: Product) => {
  const [result] = await connection.execute<ResultSetHeader & Product>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return {
    id: result.insertId,
    name,
    amount,
  };
};

const getAllProducts = async (): Promise<Product[]> => {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  return result as Product[];
};

async function updateProductPeloId(id: number, orderId: number) {
  const [result] = await connection.execute(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [orderId, id],
  );
  return result as RowDataPacket;
}

export default { 
  addProduct,
  getAllProducts,
  updateProductPeloId,
};