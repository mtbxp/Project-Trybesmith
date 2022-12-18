import { Request, Response } from 'express';

import jwt from 'jsonwebtoken';

import * as usersService from '../services/users.service';

const secret = process.env.JWT_SECRET || 'secretToken';

export default async function insertUsers(req: Request, res: Response) {
  const { body } = req;
  const returnUser = await usersService.insertProductService(body);

  const { id, username } = returnUser;

  const token = jwt
    .sign({ data: { username, id } }, secret, { expiresIn: '1d', algorithm: 'HS256' });

  req.body.user = id;

  return res.status(201).json({ token });
}