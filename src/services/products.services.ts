import Product from '../models/products.models';
import { ProductInterface, AddedProductInterface } from '../interfaces/products.interfaces';

const registerProduct = async (name: string, amount: string) => {
  const newProduct = new Product(name, amount);
  const addedProductId = await newProduct.save();

  const addedProduct = await new Product('', '').getAll().then((products) => {
    const addProduct = products.find((product) => product.id === addedProductId);
    return addProduct;
  });

  return addedProduct as AddedProductInterface;
};

const getAllProducts = async (): Promise<ProductInterface[]> => {
  const products = await new Product('', '').getAll();

  return products as ProductInterface[];
};

export { registerProduct, getAllProducts };