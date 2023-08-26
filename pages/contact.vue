<template>
	<div>
		<NuxtLayout name="page">
			<TheContact />
			<TheFooter />
		</NuxtLayout>
	</div>
</template>

<script setup>
useHead({
	title: "Contact me - Zackaria SLIMANE",
	meta: [
		{ name: "description", content: "Contact Zackaria SLIMANE - Front-end Web Developer" },
		{ name: "og:description", content: "Contact Zackaria SLIMANE - Front-end Web Developer " },
		{ name: "twitter:description", content: "Contact Zackaria SLIMANE - Front-end Web Developer " },
		{ name: "og:title", content: "Contact Zackaria SLIMANE - Front-end Web Developer" },
		{ name: "twitter:title", content: "Contact Zackaria SLIMANE - Front-end Web Developer" },
	],
	link: [{ rel: "canonical", href: "https://zackariasl.ma/contact/" }],
});
</script>
