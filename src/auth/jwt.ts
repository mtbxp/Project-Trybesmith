import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../interfaces/users.interface';

dotenv.config();

const secret = <string>process.env.JWT_SECRET;

const createToken = (user: User): string => {
  const token = jwt.sign(user, secret, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });  
  console.log(token);
  
  return token;
};
export default createToken;
