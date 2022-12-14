interface Order {
  id?: number;
  userId: number
  amount: number;
  orderId?: number | null;

}
export default Order;