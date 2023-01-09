import { Pool, ResultSetHeader } from 'mysql2/promise';
import IOrders from '../interfaces/orders.interface';
import IProduct from '../interfaces/product.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrders[]> => {
    const [rowProducts] = await this.connection.execute<IProduct[] & ResultSetHeader>(
      'SELECT id, order_id as orderId FROM Trybesmith.products',
    );
    const [rowOrders] = await this.connection.execute<IOrders[] & ResultSetHeader>(
      'SELECT id, user_id as userId FROM Trybesmith.orders',
    );
    // rowProducts.map((item) => ((item.orderId === id) ? item.id : null))
    
    // const row: IOrders[] = rowOrders.map<IOrders>(
    //   ({ id, userId }) => ({ 
    //     id,
    //     userId,
    //     productsIds: rowProducts
    //       .map((item) => ((item.orderId === id) ? item.id : item.orderId)) as number[],
    //   }),
    // );
    const row: IOrders[] = rowOrders.map<IOrders>(
      ({ id, userId }) => ({ 
        id,
        userId,
        productsIds: rowProducts
          .filter(({ orderId }) => orderId === id).map((item) => item.id) as number[],
      }),
    );

    return row;
  };
}