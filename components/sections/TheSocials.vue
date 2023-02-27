<template>
  <div class="flex justify-between items-center">
    <div class="flex gap-1">
      <SocialIcon title="Github" link="https://github.com/Zackaria-Slimane"
        icon="ant-design:github-filled" />
      <SocialIcon title="LinkedIn" link="https://www.linkedin.com/in/zackaria-slimane/"
        icon="ant-design:linkedin-outlined" />
      <SocialIcon title="Twitter" link="https://twitter.com/gitignorer"
        icon="ant-design:twitter-outlined" />
      <SocialIcon title="Resume"
        link="https://drive.google.com/file/d/1YeqJjct_te-6jd1_6qjT3OglJK1NOTo0/view?usp=share_link"
        icon="ant-design:file-outlined" />
    </div>
    <ActionButton link="mailto:zackaria.slimane">Get in touch with me !</ActionButton>
  </div>
</template>

<script setup lang="ts">
import ActionButton from "../ui/ActionButton.ts";
import SocialIcon from "../ui/SocialIcon.ts";
</script>
