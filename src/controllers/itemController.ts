import { Request, Response } from 'express';
import statusCodes from '../statusCodes';
import ItemService from '../services/itemService';

class ItemsController {
  constructor(private itemService = new ItemService()) { }

  // public getAll = async (_req: Request, res: Response) => {
  //   const books = await this.bookService.getAll();
  //   res.status(statusCodes.OK).json(books);
  // };

  // public getById = async (req: Request, res: Response) => {
  //   const id = Number(req.params.id);
  //   const book = await this.bookService.getById(id);

  //   if (!book) {
  //     return res.status(statusCodes.NOT_FOUND)
  //       .json({ message: 'Book not found!' });
  //   }

  //   res.status(statusCodes.OK).json(book);
  // };

  public create = async (req: Request, res: Response) => {
    const item = req.body;

    const itemCreated = await this.itemService.create(item);
    res.status(statusCodes.CREATED).json(itemCreated);
  };
}

export default ItemsController;