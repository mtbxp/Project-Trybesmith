import { userRegistrationModel, getAll } from '../models/userModel';
import { User } from '../interfaces/index';
import { createToken } from '../token/createToken';

export async function getAllSevice() {
  const result = await getAll();
  return result; 
}

export async function userRegistrationService(user: User): Promise<string> {
  const jwtPassword = '12345678';
  await userRegistrationModel(user);
  const result = createToken(jwtPassword);
  return result;
}