/* eslint-disable import/prefer-default-export */
import { DefaultHttpResponse, InternalErrResponse } from '../interfaces/Responses';
import { LogUser, User } from '../interfaces/User';
import { createUser, loginUser } from '../models/user.model';
import generateToken from '../utils/auth/jwt-generator';
import { defaultHttpResponse, internalErrResponse } from '../utils/responses';

export async function registerUser(newUser: User):
Promise<DefaultHttpResponse | InternalErrResponse> {
  try {
    const createdUser = await createUser(newUser);
    if (createdUser) {
      const token = { token: generateToken(createdUser) };
      return defaultHttpResponse(201, token);
    }
    const errMessage = { message: 'Usuario nao cadastrado, database ERROR' };
    return defaultHttpResponse(500, errMessage);
  } catch (err) {
    return internalErrResponse(err);
  }
}

export async function logUser(user: LogUser):
Promise<DefaultHttpResponse | InternalErrResponse> {
  try {
    const loggedUser = await loginUser(user);
    if (loggedUser) {
      const token = { token: generateToken(loggedUser) };
      return defaultHttpResponse(200, token);
    }
    const errMessage = { message: 'Username or password invalid' };
    return defaultHttpResponse(401, errMessage);
  } catch (err) {
    return internalErrResponse(err);
  }
}