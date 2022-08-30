<template>
  <h1>Hello 50x50</h1>
  <div class="grid">
    <div v-for="cell in grid" :key="cell" :class="'card-' + cell">
      <button class="cell" type="button" @click="count++">{{ count }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const grid = ref(2500);
</script>

<style scoped lang="scss">
.grid {
  width: 1100px;
  display: grid;
  grid-template-columns: repeat(50, 1fr);
}

.cell {
  margin: 1px;
  padding: 2px;
}
</style>
