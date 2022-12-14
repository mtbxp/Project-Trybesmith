import { Request, Response } from 'express';
import service from '../service';

export default class ProductController {
  public service;

  constructor() {
    this.service = new service.User();
  }

  public async post(req: Request, res: Response): Promise<Response> {
    try {
      console.log(req.body);
      const { error, message, token } = await this.service.post(req.body);
      if (error) {
        return res.status(400).json({ message });
      }
      return res.status(201).json({ token });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  }
}