import { ResultSetHeader } from 'mysql2';
import connections from './connection';

interface Product {
  name: string;
  amount: string;
}

interface ProductR extends Product {
  id: number;
}

const addNewProduct = async (product: Product): Promise<ProductR> => {
  const [{ insertId }] = await connections.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.products (name) VALUES (?, ?)`, [product.name, product.amount]);
  return { id: insertId, ...product };
};

export default {
  addNewProduct,
};