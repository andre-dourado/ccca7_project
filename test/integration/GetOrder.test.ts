import GetOrder from '../../src/application/GetOrder';
import PgPromiseAdapter from '../../src/infra/database/PgPromiseAdapter';
import OrderRepositoryDatabase from '../../src/infra/repository/database/OrderRepositoryDatabase';

test("Deve retornar um pedido com base no código", async function () {
    const connection = new PgPromiseAdapter();
    const orderRepository = new OrderRepositoryDatabase(connection);
    const orderService = new GetOrder(orderRepository);
    const output = await orderService.execute({ orderCode: "202200000001" });
    expect(output.orderCode).toBe("202200000001");
    await connection.close();
});