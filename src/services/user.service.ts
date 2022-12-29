import { ErrorMessage, InternalErrResponse, TokenResponse } from '../interfaces/Responses';
import { LogUser, User } from '../interfaces/User';
import { createUser, loginUser } from '../models/user.model';
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

export async function logUser(user: LogUser):
Promise<TokenResponse | ErrorMessage | InternalErrResponse> {
  try {
    const loggedUser = await loginUser(user);
    if (loggedUser) {
      return { token: generateToken(user) };
    }
    return { message: 'Usuario não encontrado, CLIENT ERROR' };
  } catch (err) {
    return internalErrResponse(err);
  }
}