<script setup lang="ts">
import { type CustomerData, updateCustomerCredit } from '@/fetch/CustomerData.ts';
import { useModal } from '@/composables/useModal.ts';
import ManageCreditModal from '@/components/ManageCreditModal/ManageCreditModal.vue';
import { ref } from 'vue';

const { isModalOpen, closeModal, openModal } = useModal();

const selectedAccount = ref<CustomerData | null>(null);
const showSuccess = ref(false);

const onAddCreditClicked = (account: CustomerData) => {
  selectedAccount.value = account;
  openModal();
};

const onCreditAdded = (credit: number) => {
  if (!selectedAccount.value) return;

  try {
    updateCustomerCredit(selectedAccount.value.id, credit);
    selectedAccount.value.available_credit = credit;
    showSuccess.value = true;
  } catch {
    console.log('error');
  }
  closeModal();
};

const { accounts } = defineProps<{ accounts: CustomerData[] }>();
</script>
<template>
  <v-table fixed-header>
    <thead>
      <tr>
        <th class="text-left w-30">ID</th>
        <th class="text-left w-50">Email</th>
        <th class="text-left">Credits</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="account in accounts" :key="account.id">
        <td>{{ account.id }}</td>
        <td>{{ account.email }}</td>
        <td>{{ account.available_credit }}</td>
        <td>
          <v-btn variant="tonal" size="small" @click="onAddCreditClicked(account)"
            >add credit</v-btn
          >
        </td>
      </tr>
    </tbody>
  </v-table>
  <ManageCreditModal
    v-if="isModalOpen && selectedAccount"
    :current-balance="selectedAccount.available_credit"
    @close="closeModal"
    @credit-added="onCreditAdded"
  />
  <v-snackbar v-model="showSuccess" color="success" timeout="3000" location="top end">
    New credit successfully added!
  </v-snackbar>
</template>
