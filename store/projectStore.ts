import { defineStore } from "pinia";
import { ProjectStore } from "../types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", {
	as: "url",
	eager: true,
});

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
	const projects = [
		{
			id: 6,
			name: "Coinbend - budgeting app",
			image: images["../assets/featured/coinbend-shot.png"],
			webpImage: images["../assets/featured/coinbend-shot.webp"],
			description: "A simple expense tracking and bugeting web application",
			tech: ["Nuxt 3", "Supabase", "TailwindCSS", "Netlify"],
			link: "https://coinbend.netlify.app",
			featured: true,
		},
		{
			id: 62,
			name: "React portfolio",
			image: images["../assets/featured/zsog.png"],
			webpImage: images["../assets/featured/zsog.png"],
			description: "My new updated portfolio website using react",
			tech: ["Reactjs", "TailwindCSS", "Framer motion", "Vercel"],
			link: "https://zackariasl.dev",
			featured: true,
		},
		{
			id: 1408,
			name: "AST Forge - Resume maker",
			image: images["../assets/featured/ast-forge.png"],
			description: "A resume maker based on a professionnal template",
			tech: ["React", "Chakra UI", "Vite", "jspdf"],
			link: "https://astforge.netlify.app",
			featured: true,
		},
		{
			id: 12,
			name: "Disconnect to connect - All inclusive meetings",
			image: images["../assets/featured/dtc.png"],
			webpImage: images["../assets/featured/dtc.webp"],
			description:
				"A landing site for all inclusive meetings and seminaires held in Dakhla, Morocco",
			tech: ["Wordpress", "javaScript", "Custom css"],
			link: "https://disconnectoconnect.com/",
			featured: false,
		},
		{
			id: 26,
			name: "Beautymall - online beauty and drugstore",
			image: images["../assets/featured/beautymall.png"],
			webpImage: images["../assets/featured/beautymall.webp"],
			description: "New and improved Ecommerce site for Beautymall",
			tech: ["Wordpress", "SEO", "Custom css", "javaScript"],
			link: "https://beautymall.ma/",
			featured: true,
		},
		{
			id: 28,
			name: "WestPoint - Eco lodges, fresh food and surf culture",
			image: images["../assets/featured/westpoint.png"],
			webpImage: images["../assets/featured/westpoint.webp"],
			description: "Westpoint's new website for Dakhla Hotels group",
			tech: ["Wordpress", "SEO", "javaScript", "Custom css"],
			link: "https://westpointdakhla.ma/",
			featured: false,
		},
		{
			id: 3,
			name: "DropTask",
			image: images["../assets/featured/taskify-shot.png"],
			webpImage: images["../assets/featured/taskify-shot.webp"],
			description: "Tasks board tracking app with drag and drop functionality",
			tech: ["Vue.js", "TailwindCSS", "MongoDB", "Netlify"],
			link: "https://droptask.netlify.app/",
			featured: false,
		},
		{
			id: 22,
			name: "Distribio",
			image: images["../assets/featured/distribio.png"],
			webpImage: images["../assets/featured/distribio.webp"],
			description: "Ecommerce website for local buisness",
			tech: ["Shopify", "custom Css"],
			link: "https://distribio.ma/",
			featured: false,
		},
	];

	return {
		getAllProjects: projects.slice(),
		getFeaturedProjects: projects.filter((project) => project.featured),
	};
});
