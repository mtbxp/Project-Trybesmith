import { RowDataPacket } from 'mysql2';
import { Product } from '../interfaces';
import connection from './connection';

export default class ProductsModel {
  getAll = async (): Promise<Product[]> => {
    const [products] = await connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
  
    return products as Product[];
  };
  
  create = async () => {
    
  };
}
