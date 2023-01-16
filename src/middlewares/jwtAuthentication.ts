import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = <string>process.env.JWT_SECRET;

const createToken = <T extends object>(user: T): string => (
  jwt.sign({ data: user }, SECRET)
);

export default { createToken };