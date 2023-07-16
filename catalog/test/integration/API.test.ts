import axios from "axios";

test.skip("Deve obter um item da API", async function () {
    const response = await axios({
        url: "http://localhost:3004/items/1",
        method: "get",
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
    expect(output.description).toBe("Guitarra");
    expect(output.price).toBe(1000);
});