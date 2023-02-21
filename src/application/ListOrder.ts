import Order from '../domain/entities/Order';
import OrderRepository from '../domain/repository/OrderRepository';

export default class ListOrder {
     
    constructor(readonly orderRepository: OrderRepository) {
    }

    async execute(): Promise<Output> {
        const orders = await this.orderRepository.listOrder();
        return {
            orders
        }
    }
}

type Output = {
    orders: Order[]
}