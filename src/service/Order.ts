import models from '../models';
import conn from '../models/connection';
import { OrderEtProducts } from '../types';

export default class OrderService {
  public model;

  constructor() {
    this.model = new models.Order(conn);
  }

  public async listAll(): Promise<OrderEtProducts[]> {
    const orders = await this.model.listAll();
    return orders as OrderEtProducts[];
  }

  public async post(productIds: number[], userId: number) {
    const newOrder = await this.model.post(productIds, userId);
    if (!newOrder) {
      return { error: true, message: 'Could not post order' };
    }
    return { error: false, data: newOrder };
  }
}