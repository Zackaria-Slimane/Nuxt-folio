<template>
	<div class="dark:text-p_text dark:bg-background px-3 sm:px-1">
		<RobotMeta />
		<NuxtLayout name="default">
			<NuxtPage v-slot="{ Component }">
				<component :is="Component" />
			</NuxtPage>
		</NuxtLayout>
		<Teleport to="body">
			<TheNavbar />
			<CookiesNotification />
		</Teleport>
	</div>
</template>

<script setup>
defineRobotMeta();
</script>

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
