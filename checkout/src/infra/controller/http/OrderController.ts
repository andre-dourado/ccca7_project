import Connection from '../../database/Connection';
import Http from '../../http/Http';
import ItemRepositoryDatabase from '../../repository/database/ItemRepositoryDatabase';
import PreviewOrder from '../../../application/PreviewOrder';
import OrderRepositoryDatabase from '../../repository/database/OrderRepositoryDatabase';
import GetOrder from '../../../application/GetOrder';
import ListOrder from '../../../application/ListOrder';
// Inteface Adapter
export default class OrderController {

    constructor (readonly http: Http, readonly connection: Connection) {
        http.on("post", "/orderPreview", function (params: any, body: any) {
            const itemRepository = new ItemRepositoryDatabase(connection);
            const previewOrder = new PreviewOrder(itemRepository);
            const output = previewOrder.execute(body);
            return output;
        });

        http.on("get", "/orders/:orderCode", async function (params: any, body: any) {
            const orderRepository = new OrderRepositoryDatabase(connection);
            const orderService = new GetOrder(orderRepository);
            const output = await orderService.execute(params);
            return output;
        });

        http.on("get", "/orders", async function (params: any, body: any) {
            const orderRepository = new OrderRepositoryDatabase(connection);
            const orderService = new ListOrder(orderRepository);
            const output = await orderService.execute();
            return output;
        });
    }
}