<script setup lang="ts">
defineProps<{
  name: string
  description: string
  price: string
  image: string
}>()
</script>

<template>
  <div class="product-tile">
    <img :src="image" class="product-tile__image" />
    <h3 class="product-tile__name">{{ name }}</h3>
    <h5 class="product-tile__description">{{ description }}</h5>
    <p class="product-tile__price">{{ price }}</p>
    <div>
      <v-btn block flat border="sm" color="primary" class="product-tile__buy-button">
        <v-icon start>mdi-cart</v-icon>
        Buy
      </v-btn>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-tile {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 300px;

  &__image {
    width: 100%;
    height: auto;
  }

  &__name,
  &__price,
  &__description {
    margin-bottom: 0.5rem;
  }

  &__buy-button {
    margin-top: 1rem;
  }
}
</style>
