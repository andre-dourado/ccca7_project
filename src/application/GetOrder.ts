import OrderRepository from '../domain/repository/OrderRepository';

export default class GetOrder {
    
    constructor (readonly orderRepository: OrderRepository) {
    }

    async execute (input: Input): Promise<Output> {
        const order = await this.orderRepository.getByCode(input.orderCode); 
        return {
            orderCode: order.getCode()
        }
    }

}

type Input = {
    orderCode: string
}

type Output = {
    orderCode: string
}