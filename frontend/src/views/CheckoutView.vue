<script setup lang="ts">
import { inject, onMounted, reactive } from 'vue';
import Order from '../entities/Order';
import Item from '../entities/Item';
import ItemService from '../services/ItemService';
import OrderComponent from '../components/OrderComponent.vue';
import ItemComponent from '../components/ItemComponent.vue';

const data = reactive({ items: [] as Item[] });
const order = reactive(new Order());

onMounted(async () => {
	const itemService = inject("itemService") as ItemService;
	data.items = await itemService.getItems();
});
</script>

<template>
	<div class="main">
		<div class="items">
			<div v-for="item of data.items">
				<ItemComponent :item="item" :order="order"></ItemComponent>
			</div>
		</div>
		<OrderComponent :order="order"></OrderComponent>
	</div>
</template>

<style scoped>
.main {
	display: flex;
	flex-direction: row;
}
.items {
	display: flex;
	flex-direction: row;
	width: 70%;
}
.order {
	background-color: #ccc;
	width: 30%;
}
</style>
