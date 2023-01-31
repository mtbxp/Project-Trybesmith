import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import User from '../interfaces/users.interface';

dotenv.config();

const secret = <string>process.env.JWT_SECRET;

const createToken = ({ id, username }: User) => {
  const token = jwt.sign({ id, username }, secret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });  
  // console.log(token);
  
  return token;
};
export default createToken;
