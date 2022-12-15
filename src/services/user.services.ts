import { User } from '../interfaces/interface';
import userModel from '../models/user.models';

async function postUser(request: User): Promise<string> {
  const result = await userModel.postUser(request);
  return result;
}

export default {
  // getProductById,
  // getAllProducts,
  postUser,
  // updateProduct,
};