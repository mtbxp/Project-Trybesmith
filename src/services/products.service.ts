import { BadRequestError } from 'restify-errors';
import connection from '../models/connection';
import ProductModel from '../models/products.model';
import Product from '../interfaces/product.interface';

const properties = ['name', 'amount'];

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  static validateProperties(product: Product): [boolean, string | null] {
    for (let i = 0; i < properties.length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
        return [false, properties[i]];
      }
    }
    return [true, null];
  }
  
  static validateValues(product: Product): [boolean, string | null] {
    const entries = Object.entries(product);
    for (let i = 0; i < entries.length; i += 1) {
      const [property, value] = entries[i];
      if (!value) {
        return [false, property];
      }
    }
    return [true, null];
  }
  
  static validationProduct(product: Product): void | string {
    let [valid, property] = ProductService.validateProperties(product);
  
    if (!valid) {
      return `O campo ${property} é obrigatório.`;
    }
    [valid, property] = ProductService.validateValues(product);
  
    if (!valid) {
      return `O campo ${property} não pode ser nulo ou vazio.`;
    }
  }

  public async getAll(): Promise<Product[]> {
    const books = await this.model.getAll();
    return books;
  }

  public create(product: Product): Promise<Product> {
    // chamamos o método validationBook
    const isValidProduct = ProductService.validationProduct(product);
  
    if (typeof isValidProduct === 'string') {
      // aqui estamos jogando o erro para o nosso middleware de erro fazer o tratamento e dar a resposta da requisição
      throw new BadRequestError(isValidProduct);
    }
    // depois de todas as verificações chamamos a camada de model
    return this.model.create(product);
  }
}

export default ProductService;