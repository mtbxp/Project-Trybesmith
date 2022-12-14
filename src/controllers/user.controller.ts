import { Request, Response } from 'express';
import User from '../interfaces/user.interface';
import UserService from '../services/user.service';
import Jwt from '../auth/jwtConfig';
import HttpError from '../errors/httpErrors';

export default class UserController {
  public service:UserService;

  constructor() {
    this.service = new UserService();
  }

  public async createUser(req:Request, res:Response) {
    const user:User = req.body;
    const payload = await this.service.createUser(user);

    // if (payload) {
    //   const httpError = new HttpError();
    //   return httpError.setError(res, 404, 'Usuario não cadastrado');
    // }
  
    const { id, username } = payload;
    
    const jwt = new Jwt({ id, username });

    const token = jwt.createToken();

    return res.status(201).json({ token });
  }
}