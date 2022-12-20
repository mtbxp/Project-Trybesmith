import getAllOrdersWihtProductsModel from '../../models/orders';

const getAllOrdersService = async () => {
  const orders = await getAllOrdersWihtProductsModel();
  return orders;
};

export default getAllOrdersService;