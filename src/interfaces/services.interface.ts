import IProduct from './product.interface';

interface IServices {
  type: null | 'NOT_FOUND'
  message: string | IProduct | IProduct[]
}

export default IServices;