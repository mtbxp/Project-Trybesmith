import { IUser } from '../interfaces/users';
import createNewUser from '../models/users.model';

export default async function create(user: IUser): Promise<IUser> {
  const crearteProduct = await createNewUser(user);
  return crearteProduct;
}