<script setup lang="ts">
import { ref } from 'vue';

const { currentBalance } = defineProps<{
  currentBalance: number;
}>();

const emit = defineEmits<{
  close: [];
  'credit-added': [credit: number];
}>();

const credit = ref(currentBalance);

const increase = () => {
  credit.value += 50;
};

const decrease = () => {
  credit.value -= 50;
};

function updateCredit() {
  emit('credit-added', credit.value);
}
</script>

<template>
  <v-overlay :model-value="true" class="d-flex align-center justify-center">
    <v-card class="pa-4" width="400">
      <v-card-title class="text-h6">Adjust Credits</v-card-title>

      <v-card-text class="d-flex align-center justify-center ga-2">
        <v-btn icon @click="decrease">
          <v-icon>mdi-minus</v-icon>
        </v-btn>

        <v-text-field
          v-model="credit"
          type="number"
          class="mx-2"
          style="max-width: 120px"
          hide-details
          variant="outlined"
          density="comfortable"
        />

        <v-btn icon @click="increase">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-actions class="justify-end">
        <v-btn text @click="emit('close')">Cancel</v-btn>
        <v-btn color="primary" @click="updateCredit">Update Credits</v-btn>
      </v-card-actions>
    </v-card>
  </v-overlay>
</template>
