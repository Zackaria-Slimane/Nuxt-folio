<template>
  <NuxtLayout name="default">
    <NuxtPage v-slot="{ Component }">
      <component :is="Component" />
    </NuxtPage>
  </NuxtLayout>
  <Teleport to="body">
    <TheNavbar />
    <CookiesNotification />
  </Teleport>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0.3;
  filter: blur(1rem);
}
</style>
