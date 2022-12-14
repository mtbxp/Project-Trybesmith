import { Request, Response } from 'express';
import * as Userservice from '../services/user.service';
import { TUser } from '../types';

export async function create(req: Request, res: Response) {
  try {
    const user = req.body as TUser;
    const token = await Userservice.create(user);

    return res.status(201).json(token);
  } catch (err:unknown) {
    console.log('**ERRO**', err);
  }
}

export function getAll() {

}