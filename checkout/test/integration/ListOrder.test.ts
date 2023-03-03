import ListOrder from '../../src/application/ListOrder';
import PgPromiseAdapter from '../../src/infra/database/PgPromiseAdapter';
import OrderRepositoryDatabase from '../../src/infra/repository/database/OrderRepositoryDatabase';

test("Deve retornar a lista de pedidos", async function () {
    const connection = new PgPromiseAdapter();
    const orderRepository = new OrderRepositoryDatabase(connection);
    const orderService = new ListOrder(orderRepository);
    const {orders} = await orderService.execute();
    expect(orders.length).toBeGreaterThan(0);
    connection.close();
});