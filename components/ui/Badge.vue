<template>
	<span
		class="inline-block items-center rounded-md bg-sky-800 px-3 py-0.5 text-sm font-light text-white">{{ label }}</span>
</template>

<script setup>
	defineProps({
		label: {
			type: String,
			default: 'test'
		}
	})
</script>
