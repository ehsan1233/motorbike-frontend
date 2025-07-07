<script setup lang="ts">
import { useModal } from '@/composables/useModal';
import NewAccountModal from '@/components/NewAccountModal/NewAccountModal.vue';
import { type CustomerData, getCustomers } from '@/fetch/CustomerData.ts';
import { onBeforeMount, ref } from 'vue';

const { isModalOpen, openModal, closeModal } = useModal();

const customers = ref<CustomerData[]>([]);

onBeforeMount(async () => {
  customers.value = await getCustomers();
});
</script>

<template>
  <div class="admin-view__actions">
    <v-btn flat color="primary" @click="openModal"> New Account</v-btn>
  </div>
  <div v-for="customer in customers" :key="customer.id">
    <p>{{ customer.email }}</p>
  </div>
  <NewAccountModal v-if="isModalOpen" @close="closeModal" />
</template>

<style lang="scss" scoped>
.admin-view {
  &__actions {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-right: 20px;
  }
}
</style>
