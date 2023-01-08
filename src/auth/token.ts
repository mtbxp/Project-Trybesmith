import dotenv from 'dotenv';
import jwt, { SignOptions } from 'jsonwebtoken';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig: SignOptions = { algorithm: 'HS256' };

const defineToken = (id: number) => jwt.sign({ data: { id } }, secret, jwtConfig);

export default defineToken;