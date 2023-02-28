<template>
  <footer>
    <h2 class="sr-only">
      Footer
    </h2>
    <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 mt-24" />
    <div class="mx-auto max-w-md px-4 sm:max-w-7xl sm:px-6 lg:px-8 mt-6 ">
      <div class="text-center mx-auto align-middle content-center">
        <img class="inline-block !h-[150px] !w-[350px] " src="~/assets/LOGO-ZS.png" alt="logo"
          srcset="~/assets/LOGO-ZS.png" height="250px" width="300px">
      </div>
      <div class="text-center mb-2 mt-10">
        <nuxt-link class="!text-rose-400" to="/privacy"> Privacy & data</nuxt-link>
        <div class="mt-1">
          <p class="text-base text-gray-400 text-center">
            &copy; {{ year }}.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()

</script>
<style scoped>
.router-link-active {
  background: none;
}
</style>
