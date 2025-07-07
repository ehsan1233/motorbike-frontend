<script setup lang="ts">
import { useModal } from '@/composables/useModal';
import NewAccountModal from '@/components/NewAccountModal/NewAccountModal.vue';
import { type CustomerData, getCustomers } from '@/fetch/CustomerData.ts';
import { onBeforeMount, ref } from 'vue';
import AccountsList from '@/components/AccountsList/AccountsList.vue';

const { isModalOpen, openModal, closeModal } = useModal();

const accounts = ref<CustomerData[]>([]);

onBeforeMount(async () => {
  accounts.value = await getCustomers();
});
</script>

<template>
  <v-container>
    <div class="admin-view__actions">
      <v-btn flat color="primary" @click="openModal"> New Account</v-btn>
    </div>
    <AccountsList :accounts />
    <NewAccountModal v-if="isModalOpen" @close="closeModal" />
  </v-container>
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
