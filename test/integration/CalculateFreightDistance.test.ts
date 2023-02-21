import CalculateFreightDistance from '../../src/application/CalculateFreightDistance';
import PgPromiseAdapter from '../../src/infra/database/PgPromiseAdapter';
import AddressRepositoryDatabase from '../../src/infra/repository/database/AddressRepositoryDatabase';

test("Deve ser possível calcular a distância entre dois CEPs", async function () {
    const connection = new PgPromiseAdapter();
    const addressRepository = new AddressRepositoryDatabase(connection);
    const freightService = new CalculateFreightDistance(addressRepository);
    const {distance} = await freightService.execute({ cep1: "73320010", cep2: "73320011" });
    expect(distance).toBe(748.2217780081631);
    await connection.close();
});