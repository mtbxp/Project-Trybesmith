import IProduct from './product.interface';
import IUser from './user.interface';

// type Id = {
//   id: number
// };

interface IServices {
  type: null | 'NOT_FOUND'
  message: string | IProduct | IProduct[] | IUser | IUser[]
}

export default IServices;