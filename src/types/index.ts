import { RowDataPacket } from 'mysql2';

interface TProduct extends RowDataPacket {
  id?: number,
  name: string,
  amount: string,
  orderId: number,
}

export default TProduct;