// ./interfaces/product.interface.ts
interface Product {
  id?: number;
  name: string;
  amount: string;
}

interface User {
  username: string;
  vocation: string;
  level: number;
  password: string;
}

interface UserWithoutPassword {
  username: string;
  vocation: string;
  level: number;
}

export {
  Product,
  User,
  UserWithoutPassword,
};