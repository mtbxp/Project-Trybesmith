import { Request, Response } from 'express';
import * as serviceUser from '../Service/servicesUser';
import createTokenAuth from '../Jwt/jwtConfig';

export async function createANewPerson(request: Request, response: Response) {
  const { ...users } = request.body;

  await serviceUser.createNewUser(users);

  const token = createTokenAuth(users);

  return response.status(201).json({ token });
}

export async function getAllOrders(_request: Request, response: Response) {
  const allOrders = await serviceUser.getAllOrdersById();

  return response.status(200).json(allOrders);
}