import { defineStore } from "pinia";
import { ProjectStore } from "../types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", { as: 'url', eager: true });

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
	const projects = [
		{
			id: 6,
			name: "Coinbend - budgeting app",
			image: images["../assets/featured/coinbend-shot.png"],
			description:
				"A simple expense tracking and bugeting web application",
			tech: ["Nuxt 3", "Supabase", "TailwindCSS", "Netlify"],
			link: "https://coinbend.netlify.app",
			featured: true,
		},
		{
			id: 12,
			name: "Disconnect to connect - All inclusive meetings",
			image: images["../assets/featured/dtc.png"],
			description:
				"A landing site for all inclusive meetings and seminaires held in Dakhla, Morocco",
			tech: ["Wordpress", "javaScript", "Custom css"],
			link: "https://disconnectoconnect.com/",
			featured: true,
		},
		{
			id: 26,
			name: "Beautymall - online beauty and drugstore",
			image: images["../assets/featured/beautymall.png"],
			description:
				"New and improved Ecommerce site for Beautymall",
			tech: ["Wordpress", "SEO", "Custom css", 'javaScript'],
			link: "https://beautymall.ma/",
			featured: true,
		},
		{
			id: 28,
			name: "WestPoint - Eco lodges, fresh food and surf culture",
			image: images["../assets/featured/westpoint.png"],
			description:
				"Westpoint's new website for Dakhla Hotels group",
			tech: ["Wordpress", "SEO", "javaScript", "Custom css"],
			link: "https://westpointdakhla.ma/",
			featured: false,
		},
		{
			id: 14,
			name: "ENGIE  - Construction company",
			image: images["../assets/featured/engie.png"],
			description:
				"A  landing page for construction company client based in Morocco",
			tech: ["Wordpress", "Custom css"],
			link: "https://engieconstruction.com",
			featured: false,
		},
		{
			id: 3,
			name: "DropTask",
			image: images["../assets/featured/taskify-shot.png"],
			description:
				"Tasks board tracking app with drag and drop functionality",
			tech: ["Vue.js", "TailwindCSS", "MongoDB", "Netlify"],
			link: "https://droptask.netlify.app/",
			featured: false,
		},
		{
			id: 22,
			name: "Distribio",
			image: images["../assets/featured/distribio.png"],
			description:
				"Ecommerce website for local buisness",
			tech: ["Shopify", "custom Css"],
			link: "https://distribio.ma/",
		},

	];

	return {
		getAllProjects: projects.slice(),
		getFeaturedProjects: projects.filter((project) => project.featured),

	};
})
