<script setup lang="ts">
import ProductTile from '@/components/ProductTile/ProductTile.vue'

const products = [
  {
    name: 'Fighter 125 BC-RS',
    price: '12,999 €',
    image: new URL('@/assets/Fighter-125.jpg', import.meta.url).href,
    description: 'Motorcycle Fighter 125 UMRV-RS black and matt Euro 5',
  },
  {
    name: 'Fighter 50 V-S',
    price: '17,499 €',
    image: new URL('@/assets/Fighter-50.jpg', import.meta.url).href,
    description: 'Motorcycle Fighter 50 V-S red 45 km/h Euro 5',
  },
]
</script>

<template>
  <div class="store-view">
    <h1 class="store-view__heading">Store</h1>
    <div class="store-view__grid" tabindex="5">
      <ProductTile v-for="(product, index) in products" :key="index" v-bind="product" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.store-view {
  padding: 2rem;

  &__heading {
    margin-bottom: 1rem;
  }

  &__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
}
</style>
