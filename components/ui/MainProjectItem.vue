<template>
	<div class="flex flex-col items-center gap-8 w-4/5">
		<!-- <img :alt="name" :src="image" class="rounded-lg w-full" /> -->
		<picture class="rounded-lg w-full">
			<source :srcset="webpImage" type="image/webp">
			<source :srcset="image" type="image/png">
			<img :src="webpImage" :alt="name">
		</picture>
		<div class="flex flex-col mx-auto md:w-5/6 items-left gap-6">
			<span class="font-theme_bold text-2xl text-sky-700 dark:text-sky-400">{{ name }}</span>
			<p class="text-sm lg:text-lg">{{ description }}</p>
			<div class="flex flex-row flex-wrap gap-3">
				<Badge v-for="t in  tech" :key="t" :label="t" />
			</div>
			<ProjectBtn :link="link" class="w-fit">
				{{ returnDomain(link) }}
				<Icon class="inline text-xl" color="#eaeaea" icon="ep:top-right" />
			</ProjectBtn>
		</div>
	</div>
</template>
<script setup>
	import { Icon } from "@iconify/vue";

	const returnDomain = (domain) => domain.match(
		/(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
	).pop();

	defineProps([ "name", "image", "webpImage",  "description", "tech", "link" ])

</script>
