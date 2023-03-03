<template>
	<div>
		<hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25 my-6" />
		<div class="flex flex-col gap-5">
			<SectionTitle class="text-gray-100">Work history</SectionTitle>
			<NuxtLayout name="section">
				<WorkListItem v-for="work in works" :key="work.id" :work="work" />
			</NuxtLayout>
		</div>
	</div>
</template>

<script setup>
	import { useWorkStore } from "@/store/workStore";
	const workStore = useWorkStore();
	const works = workStore.getAllWorks;
</script>
