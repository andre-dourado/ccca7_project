import Item from '../src/entities/Item';
import { mount } from "@vue/test-utils";
import CheckoutViewVue from "../src/views/CheckoutView.vue";
import ItemService from '../src/services/ItemService';

function sleep (ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test("Deve testar a view checkout", async function () {
    const itemService: ItemService = {
        async getItems(): Promise<Item[]> {
            return [
                { idItem: 1, description: "Baixo", price: 2000 }
            ];
        }
    }
    const wrapper = mount(CheckoutViewVue, {
        global: {
            provide: {
                itemService
            }
        }
    });
    await sleep(100);
    expect(wrapper.get(".item-description").text()).toBe("Baixo");
    expect(wrapper.get(".item-price").text()).toBe("2000");
    await wrapper.get(".add-button").trigger("click");
    expect(wrapper.get(".total").text()).toBe("2000");
})