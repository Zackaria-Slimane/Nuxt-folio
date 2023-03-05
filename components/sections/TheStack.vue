<template>
  <div>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
    <SectionTitle class="text-gray-100">Technologies i work with</SectionTitle>
    <div class="container py-10 flex flex-wrap gap-3 justify-center overflow-x-hidden">
      <div class="stackitems" v-for="stack in stacks" :key="stack.id">
        <img class="stackImg stackitem" :src="stack.image" :alt="stack.name">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useStackStore } from '~~/store/stackStore';
  const stackStore = useStackStore()
  const stacks = stackStore.getAllStacks
</script>

<style>
.stackImg {
  min-height: 22px;
  min-width: 90px;
  height: 1.8em;
  border-radius: 5px;
  transform: scale(0.9);
  cursor: pointer;
}

.stackImg:hover {
  transform: scale(1.1);
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.75);
}
</style>
