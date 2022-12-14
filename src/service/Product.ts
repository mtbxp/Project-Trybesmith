import models from '../models';
import conn from '../models/connection';
import { Product } from '../types';

export default class ProductService {
  public model;

  constructor() {
    this.model = new models.Product(conn);
  }

  public async post({ name, amount }: Product): Promise<Product> {
    const newProduct = await this.model.post({ name, amount });
    return newProduct;
  }

  public async listAll(): Promise<Product[]> {
    const products = await this.model.listAll();
    return products;
  }
}