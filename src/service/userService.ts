import * as userModel from '../models/userModel';

// eslint-disable-next-line import/prefer-default-export
export async function getAll() {
  const data = await userModel.getAll();
  return { status: 200, data };
}