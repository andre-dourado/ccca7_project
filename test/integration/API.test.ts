import axios from "axios";

test("Deve simular uma compra", async function () {
    const response = await axios({
        url: "http://localhost:3000/orderPreview",
        method: "post",
        data: {
            cpf: "160.455.710-96",
            orderItems: [
                { idItem: 1, quantity: 1 },
                { idItem: 2, quantity: 1 },
                { idItem: 3, quantity: 3 }
            ]
        }
    });
    const output = response.data;
    expect(output.total).toBe(6350);
});

test("Deve retornar um pedido com base no código", async function () {
    const response = await axios({
        url: "http://localhost:3000/orders/202200000001",
        method: "get"
    });
    const output = response.data;
    expect(output.orderCode).toBe("202200000001");
});

test("Deve retornar a lista de pedidos", async function () {
    const response = await axios({
        url: "http://localhost:3000/orders",
        method: "get"
    });
    const {orders} = response.data;
    expect(orders.length).toBeGreaterThan(0);
});

test("Deve ser possível calcular a distância entre dois CEPs", async function () {
    const response = await axios({
        url: "http://localhost:3000/freight/distance",
        method: "post",
        data: {
            cep1: "73320010",
            cep2: "73320011"
        }
    });
    const { distance } = response.data;
    expect(distance).toBe(748.2217780081631);
});