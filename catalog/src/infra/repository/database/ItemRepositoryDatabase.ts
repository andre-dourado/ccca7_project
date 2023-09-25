import Connection from '../../database/Connection';
import Dimension from '../../../domain/entities/Dimension';
import Item from '../../../domain/entities/Item';
import ItemRepository from '../../../domain/repository/ItemRepository';
export default class ItemRepositoryDatabase implements ItemRepository {
    
    constructor (readonly connection: Connection) {
    }

    async getItem(idItem: number): Promise<Item> {
        const [itemData] = await this.connection.query("select * from ccca.item where id_item = $1", [idItem]);
        const item = new Item(itemData.id_item, itemData.description, parseFloat(itemData.price), new Dimension(itemData.width, itemData.height, itemData.length, itemData.weight));
        return item;
    }

    async list(): Promise<Item[]> {
        const itemsData = await this.connection.query("select * from ccca.item", []);
        const items: Item[] = [];
        for (const itemData of itemsData) {
            const item = new Item(itemData.id_item, itemData.description, parseFloat(itemData.price), new Dimension(itemData.width, itemData.height, itemData.length, itemData.weight));
            items.push(item);
        }
        return items;
    }
}