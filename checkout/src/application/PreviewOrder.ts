import ItemRepository from '../domain/repository/ItemRepository';
import Order from '../domain/entities/Order';
// use case
export default class OrderPreview {

    constructor (readonly itemRepository: ItemRepository) {
    }

    async execute (input: Input): Promise<Output> {
        const order = new Order(input.cpf);
        for (const orderItem of input.orderItems) {
            const item = await this.itemRepository.getItem(orderItem.idItem);
            order.addItem(item, orderItem.quantity);
        }
        const total = order.getTotal();
        return {
            total,
        }
    }
}

type Input = {
    cpf: string,
    orderItems: { idItem: number, quantity: number }[]
}

type Output = {
    total: number
}