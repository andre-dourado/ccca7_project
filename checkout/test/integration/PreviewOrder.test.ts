import ItemRepositoryDatabase from '../../src/infra/repository/database/ItemRepositoryDatabase';
import PgPromiseAdapter from '../../src/infra/database/PgPromiseAdapter';
import PreviewOrder from '../../src/application/PreviewOrder';

test("Deve simular um pedido", async function () {
    const connection = new PgPromiseAdapter();
    const itemRepository = new ItemRepositoryDatabase(connection);
    const orderService = new PreviewOrder(itemRepository);
    const output = await orderService.execute({
        cpf: "160.455.710-96",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ]
    });
    expect(output.total).toBe(6090);
    await connection.close();
});