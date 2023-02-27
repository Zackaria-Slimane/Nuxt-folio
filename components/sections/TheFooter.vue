<template>
  <footer>
    <h2 class="sr-only">
      Footer
    </h2>
    <div class="mx-auto max-w-md px-4 sm:max-w-7xl sm:px-6 lg:px-8 mt-24 ">
      <div class="py-2">
        <p class="text-base text-gray-400 text-center">
          &copy; {{ year }} ZS.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

</script>
