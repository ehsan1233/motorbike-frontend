<script setup lang="ts">
import { useModal } from '@/composables/useModal';
import NewAccountModal from '@/components/NewAccountModal/NewAccountModal.vue';
import { type CustomerCreateData, type CustomerData, getCustomers } from '@/fetch/CustomerData.ts';
import { onBeforeMount, ref } from 'vue';
import AccountsList from '@/components/AccountsList/AccountsList.vue';

const { isModalOpen, openModal, closeModal } = useModal();

const accounts = ref<CustomerData[]>([]);

async function refreshAccounts() {
  accounts.value = await getCustomers();
}

async function handleAccountCreation(newAccount: CustomerCreateData) {
  accounts.value.push({ id: newAccount.id, email: newAccount.email, available_credit: 0 });
}

onBeforeMount(async () => {
  await refreshAccounts();
});
</script>

<template>
  <v-container>
    <div class="admin-view__actions">
      <v-btn flat color="primary" @click="openModal">New Account</v-btn>
    </div>
    <AccountsList :accounts />
    <NewAccountModal
      v-if="isModalOpen"
      @close="closeModal"
      @account-created="handleAccountCreation"
    />
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
