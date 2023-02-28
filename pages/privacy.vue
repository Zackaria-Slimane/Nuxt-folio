<template>
	<NuxtLayout name="page">
		<MainTitle>Privacy & Data collection</MainTitle>

		<SectionParagraph>
			I use
			<LinkBtn class="text-orange-400" link="https://marketingplatform.google.com/about/analytics/"
				text="Google Analytics" />
			to gather and analyse anonymous data about my website. All data collected is
			anonymously and is used purely to analyse the website's reach.
		</SectionParagraph>

		<NuxtLayout name="section">
			<SectionTitle>What am I collecting?</SectionTitle>
			<ListItem>Number of site views</ListItem>
			<ListItem>Duration of site views</ListItem>
			<ListItem>Visitors locations</ListItem>
			<ListItem>Plateform and devices used to browse</ListItem>
		</NuxtLayout>

		<NuxtLayout name="section">
			<SectionTitle>Why am i collecting this data ?</SectionTitle>
			<SectionParagraph>As i am applying to remote and abroad jobs, i use this data to analyse and get
				and idea of my profile and portfolio views and check the location of my portfolio visitors
				anonymously.
			</SectionParagraph>
		</NuxtLayout>
		<TheFooter />
	</NuxtLayout>
</template>
