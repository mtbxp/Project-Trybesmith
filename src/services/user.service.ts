import { ErrorMessage, InternalErrResponse, TokenResponse } from '../interfaces/Responses';
import { User } from '../interfaces/User';
import createUser from '../models/user.model';
import generateToken from '../utils/authotization/jwt-generator';
import internalErrResponse from '../utils/responses';

export default async function registerUser(newUser: User):
Promise<TokenResponse | ErrorMessage | InternalErrResponse> {
  try {
    const createdUser = await createUser(newUser);
    if (createdUser) {
      return { token: generateToken(newUser) };
    }
    return { message: 'Usuario nao cadastrado, database ERROR' };
  } catch (err) {
    return internalErrResponse(err);
  }
}