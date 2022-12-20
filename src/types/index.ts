import { RowDataPacket } from 'mysql2';

export interface TProduct extends RowDataPacket {
  id: number,
  name: string,
  amount: string,
  orderId: number,
}

export interface TOrder extends RowDataPacket {
  id: number,
  userId: number,
}
