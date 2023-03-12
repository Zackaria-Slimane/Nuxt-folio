<template>
	<NuxtLink :to="to">
		<span class="hover:bg-cyan-100 hover:text-sky-400 font-theme_bold px-3 py-1 pb-2
	              rounded-md transition-all sm:px-6 sm:py-2 lg:text-sm ">
			<slot />
		</span>
	</NuxtLink>
</template>
<script setup>
	defineProps({
		to: String
	})
</script>
