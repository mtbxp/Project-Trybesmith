import { Request, Response } from 'express';
import service from '../service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new service.Login();
  }

  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const { error, message, token } = await this.service.login(req.body);
      if (error) {
        return res.status(401).json({ message });
      }
      return res.status(200).json({ token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}