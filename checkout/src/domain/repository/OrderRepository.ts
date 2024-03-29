import Order from '../entities/Order';

export default interface OrderRepository {
    save (order: Order): Promise<void>;
    count (): Promise<number>;
    clean (): Promise<void>;
    getByCode (code: string): Promise<Order>;
    listOrder(): Promise<Order[]>;
    get(code: string): Promise<Order>;
    getByGuid (guid: string): Promise<Order>;
}