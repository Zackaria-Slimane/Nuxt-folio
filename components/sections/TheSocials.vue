<template>
	<div class="flex justify-between items-center">
		<div class="flex gap-1">
			<SocialIcon title="Github" link="https://github.com/Zackaria-Slimane"
				icon="ant-design:github-filled" />
			<SocialIcon title="LinkedIn" link="https://www.linkedin.com/in/zackaria-slimane/"
				icon="ant-design:linkedin-outlined" />
			<SocialIcon title="Resume" id="resume-target"
				link="https://drive.google.com/file/d/1QCbKH84FV6Ea5TsGHEi9fr69OqRMgDOc/view?usp=share_link"
				icon="ant-design:file-outlined" />
			<SocialIcon title="Twitter" link="https://twitter.com/gitignorer"
				icon="ant-design:twitter-outlined" />
		</div>
		<ActionBtn label="Email me !" link="mailto:zakaria.slimane@hotmail.fr"/>
	</div>
</template>

<script setup lang="ts">
import SocialIcon from "../ui/SocialIcon.ts";
</script>
