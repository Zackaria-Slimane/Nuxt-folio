<template>
	<a :href="link"
		class="scale-item bg-slate-100 flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-md dark:bg-item_back dark:hover:bg-item_hover_back transition-colors border-[1px] dark:border-border_sm mt-10">
		<!-- <img :alt="name" :src="image" class="w-full object-cover rounded-md slg:h-48" /> -->
		<picture class="w-full object-cover rounded-md slg:h-48">
			<source :srcset="webpImage" type="image/webp">
			<source :srcset="image" type="image/png">
			<img :src="webpImage" :alt="name">
		</picture>
			<div class="flex flex-col justify-between gap-4 slg:gap-5">
			<span class="font-theme_bold text-sky-700 dark:text-sky-400 text-lg  slg:text-xl">
				{{
					name
				}}
			</span>
			<p class="text-sm md:text-base">
				{{ description }}
			</p>
			<div class="flex flex-row gap-3 flex-wrap">
				<Badge class="testBADGE" v-for="t in  tech" :key="t" :label="t" />
			</div>
		</div>
	</a>
</template>
<script>
	export default {
		setup () {
		},
		props: [ "name", "image", "webpImage", "description", "tech", "link" ],
	};
</script>
<style>

.scale-item:hover {
	transform: scale(1.1);
	-webkit-transform: scale(1.1);
}
</style>
