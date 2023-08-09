import Queue from '../infra/queue/Queue';
import CheckoutCommand from '../domain/event/CheckoutCommand';

export default class Checkout2 {

    constructor (readonly queue: Queue) {
    }

    async execute (input: Input): Promise<void> {
        await this.queue.publish(new CheckoutCommand(input));
    }
}

type Input = {
    from: string,
    to: string,
    cpf: string,
    date: Date,
    orderItems: { idItem: number, quantity: number }[]
}
