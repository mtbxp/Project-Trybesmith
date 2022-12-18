import * as userModel from '../models/userModel';
import { Iuser } from '../types';

export default async function insertUser(user: Iuser): Promise<void> {
  await userModel.insertUser(user);
}