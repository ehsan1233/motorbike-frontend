<script setup lang="ts">
import type { CustomerData } from '@/fetch/CustomerData.ts';

const { accounts } = defineProps<{ accounts: CustomerData[] }>();
</script>
<template>
  <v-table height="300px" fixed-header>
    <thead>
      <tr>
        <th class="text-left w-30">ID</th>
        <th class="text-left w-50">Email</th>
        <th class="text-left">Credits</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="account in accounts" :key="account.id">
        <td>{{ account.id }}</td>
        <td>{{ account.email }}</td>
        <td>{{ account.available_credit }}</td>
      </tr>
    </tbody>
  </v-table>
</template>
