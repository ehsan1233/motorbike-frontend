<script setup lang="ts">
import { type CustomerData, getCustomerData } from '@/fetch/CustomerData.ts';
import { onBeforeMount, ref } from 'vue';

const customer = ref<CustomerData>();

async function fetchCustomerData(): Promise<void> {
  customer.value = await getCustomerData('9f2f9e08-93b6-47c1-a54e-5cffc6f59e4b');
}

onBeforeMount(async () => {
  await fetchCustomerData();
});
</script>

<template>
  <p v-if="customer">{{ customer?.available_credit }}</p>
  <p v-else>Loading...</p>
</template>
