import express from 'express';
import getOrders from '../controllers/order.controller';

const orderRouter = express.Router();

export default orderRouter
  .get('/orders', getOrders);