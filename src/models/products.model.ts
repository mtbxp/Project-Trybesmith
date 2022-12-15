import connection from './connections';
import { Iproduct, InewProduct } from '../types';

export const addAProductModel = async (name:string, amount:string) => {
  const [newProduct] = await connection.execute(
    'INSERT INTO Trybesmith.products (name,amount) VALUES (?,?)',
    [name, amount],
  );
  const { insertId } = newProduct as InewProduct;
  return { id: insertId, name, amount } as Iproduct;
};

export const getAllProductsModel = async () => {
  const [allProducs] = await connection.execute(
    'select * from Trybesmith.products',
  );

  return allProducs as Iproduct[];
};
