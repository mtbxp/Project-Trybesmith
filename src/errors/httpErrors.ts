import { Response } from 'express';

export default class HttpError {
  private status: number;

  private message: string;

  constructor(status: number, message: string) {
    this.message = message;
    this.status = status;
  }

  public set(res: Response) {
    return res.status(this.status).json({ message: this.message });
  }
}
