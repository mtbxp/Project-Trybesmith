import { Request, Response } from 'express';
import { getById } from '../models/userModel';
import ordersService from '../service/ordersService';

async function getAllOrders(_req:Request, res: Response) {
  const { status, data } = await ordersService.getAllOrders();
  res.status(status).json(data);
}

async function newOrderAndUptade(req:Request, res: Response) {
  const { user, productsIds } = req.body;
  const id = await getById(user.username);
  const newOrder = await ordersService.NewOrderAndUptade(productsIds, Number(id));
  res.status(201).json(newOrder);
}

export default {
  getAllOrders,
  newOrderAndUptade,
};