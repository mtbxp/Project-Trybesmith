interface OrderRegister {
  productsIds: number[];
}
  
interface Order {
  id?: number;
  userId: string;
  productsIds: number[];
}
  
interface OrderReturned extends Order {
  id: number;
}
  
export { OrderRegister, Order, OrderReturned }; 