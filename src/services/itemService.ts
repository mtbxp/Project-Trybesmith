import Item from '../interfaces/itemInterface';
import ItemModel from '../models/itemModel';

// const properties = ['name', 'amount'];

class ItemService {
  public model: ItemModel;

  constructor() {
    this.model = new ItemModel();
  }

  public async getAll(): Promise<Item[]> {
    const items = await this.model.getAll();
    return items;
  }

  public create(item: Item): Promise<Item> {
    return this.model.create(item);
  }
}

export default ItemService;