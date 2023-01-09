import Product from '../models/products';
import { ProductInterface, AddedProductInterface } from '../interfaces/products';

const saveProduct = async (name: string, amount: string) => {
  const newProduct = new Product(name, amount);
  const addedProductId = await newProduct.saveProduct();

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

export { saveProduct, getAllProducts };