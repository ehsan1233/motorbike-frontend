<script setup lang="ts">
import { ref } from 'vue';
import { createNewCustomer, getCustomers } from '@/fetch/CustomerData';
import { v4 as uuidv4 } from 'uuid';

const valid = ref(false);

const firstname = ref('');
const lastname = ref('');
const email = ref('');
const billingAddress = ref({
  street: '',
  city: '',
  state: '',
  zipCode: '',
  country: '',
});

const emailRules = [
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];

const submit = async () => {
  if (!valid.value) return;

  try {
    await createNewCustomer({
      id: uuidv4(),
      email: email.value,
      billing_address: billingAddress.value,
    });

    await getCustomers();

    emit('close');
  } catch (error) {
    console.error('Failed to create account', error);
  }
};

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <v-overlay :model-value="true" class="d-flex align-center justify-center">
    <v-card class="modal-card">
      <h3>Create New Account</h3>

      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="6" md="4">
              <v-text-field
                v-model="firstname"
                :counter="10"
                label="First name"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="6" md="4">
              <v-text-field
                v-model="lastname"
                :counter="10"
                label="Last name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="10" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-4">
            <v-col cols="12">
              <h4>Billing Address</h4>
            </v-col>

            <v-col cols="3" md="4">
              <v-text-field v-model="billingAddress.street" label="Street" required />
            </v-col>

            <v-col cols="3" md="4">
              <v-text-field v-model="billingAddress.city" label="City" required />
            </v-col>

            <v-col cols="3" md="4">
              <v-text-field v-model="billingAddress.state" label="State" required />
            </v-col>

            <v-col cols="3" md="4">
              <v-text-field v-model="billingAddress.zipCode" label="ZIP Code" required />
            </v-col>

            <v-col cols="3" md="4">
              <v-text-field v-model="billingAddress.country" label="Country" required />
            </v-col>
          </v-row>
        </v-container>
      </v-form>

      <div class="modal-actions">
        <v-btn color="primary" @click="submit">Create</v-btn>
        <v-btn color="secondary" @click="emit('close')">Close</v-btn>
      </div>
    </v-card>
  </v-overlay>
</template>

<style scoped lang="scss">
.modal-card {
  width: 700px;
  padding: 24px;
}
</style>
