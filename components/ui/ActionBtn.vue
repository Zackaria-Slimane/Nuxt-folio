
<template>
  <a target="_blank" type="button" :href="link" class="button inline-flex items-center px-4 py-3 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
    {{label}}
  <MailIcon class="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
  </a>
</template>

<script setup>
import { MailIcon } from '@heroicons/vue/solid'
defineProps({
  label:String,
  link:String,
})

</script>