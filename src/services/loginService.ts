import newToken from '../authentication/jwtAuth';
import { Users } from '../types/User';

const searchLogin = async ({ username, password }: Users) => {
  const generateToken = newToken({ username, password });
  return generateToken;
};

export default {
  searchLogin,
};