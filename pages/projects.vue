<template>
  <div>
    <NuxtLayout name="page">
      <MainTitle>Projects</MainTitle>
      <MainParagraph class="-mt-2">
        These are some of my public / side projects that i built , i also participate in <span
          class="text-orange-400">Hacktoberfest</span>
        and i am constatly looking for <span class="text-rose-400">Open Source projects</span> to
        contribute to.
      </MainParagraph>
      <hr class="bg-squgily bg-repeat border-0 h-[6px] opacity-25" />
      <div class="flex flex-col items-center justify-center gap-28">
        <MainProjectItem v-for="proj in projects" :key="proj.id" :description="proj.description"
          :image="proj.image" :link="proj.link" :name="proj.name" />
      </div>
      <TheFooter />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useProjectStore } from "~/store/projectStore";

const { getAllProjects } = useProjectStore();

const projects = getAllProjects;

</script>
