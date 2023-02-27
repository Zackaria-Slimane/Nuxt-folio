import {defineStore} from "pinia";
import {ProjectStore} from "../types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", {as: 'url', eager: true});

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
    const projects = [
        {
            id: 6,
            name: "Coinbend - budgeting app",
            image: images["../assets/featured/coinbend-shot.png"],
            description:
                "A simple expense tracking and bugeting web application",
            tech: ["Nuxt 3", "Supabase", "TailwindCSS","Netlify"],
            link: "https://coinbend.netlify.app",
            featured: true,
        },
        {
            id: 3,
            name: "DropTask",
            image: images["../assets/featured/taskify-shot.png"],
            description:
                "Tasks board tracking app with drag and drop functionality",
            tech: ["Vue.js", "TailwindCSS","MongoDB", "Netlify"],
            link: "https://droptask.netlify.app/#/",
            featured: false,
        },
        {
            id: 4,
            name: "Animefy",
            image: images["../assets/featured/animefy-shot.png"],
            description:
                "A  rapidApi based app that suggests what to watch following input",
            tech: ["Vue 3", "Node.js", "TailwindCSS", "Netlify"],
            link: "https://animefy.netlify.app",
        },
        {
            id: 2,
            name: "My Old Portfolio",
            image: images["../assets/featured/portcelio-shot.png"],
            description:
                "Basic portfolio built with Vue 2 - outdated",
            tech: ["Vue 2", "TailwindCSS"],
            link: "https://portcelio.netlify.app/",
            featured: true,
        },
    ];

    return {
        getAllProjects: projects.slice(),
        getFeaturedProjects: projects.filter((project) => project.featured),

    };
})
