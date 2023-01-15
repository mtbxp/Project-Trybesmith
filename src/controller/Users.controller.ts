import { Request, Response } from 'express';
import insertUser from '../services/Users.services';

const cadastrarPessoa = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { body } = req;
    const result = await insertUser(body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default cadastrarPessoa;
