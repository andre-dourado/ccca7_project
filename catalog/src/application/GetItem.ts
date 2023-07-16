import ItemRepository from '../domain/repository/ItemRepository'

export default class GetItem {

    constructor (readonly itemRepository: ItemRepository) {
    }

    async execute (idItem: number): Promise<Output> {
        const item = await this.itemRepository.getItem(idItem);
        const output = {
            idItem: item.idItem,
            description: item.description,
            price: item.price,
            width: item.dimension.width,
            height: item.dimension.height,
            length: item.dimension.length,
            weight: item.dimension.weight,
            volume: item.getVolume(),
            density: item.getDensity()
        }
        return output;
    }
}

type Output = {
    idItem: number,
    description: string,
    price: number,
    width: number,
    height: number,
    length: number,
    weight: number,
    volume: number,
    density: number
}