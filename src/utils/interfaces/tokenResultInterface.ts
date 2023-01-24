import { JsonWebTokenError, JwtPayload } from 'jsonwebtoken';

export interface TokenResult {
  error: null | JsonWebTokenError,
  data: null | JwtPayload | string | undefined,
}