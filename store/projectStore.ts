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
			image: images["../assets/featured/coinbend.png"],
			webpImage: images["../assets/featured/coinbend.png"],
			description: "A simple expense tracking and bugeting web application",
			tech: ["Nuxt 3", "Supabase", "TailwindCSS", "Netlify"],
			link: "https://coinbend.netlify.app",
			featured: false,
		},
		{
			id: 62,
			name: "Updated React portfolio",
			image: images["../assets/featured/reactfolio.png"],
			webpImage: images["../assets/featured/reactfolio.png"],
			description: "My new updated portfolio website using react",
			tech: ["Reactjs", "TailwindCSS", "Framer motion", "Vercel"],
			link: "https://zackariasl.dev",
			featured: true,
		},
		{
			id: 621,
			name: "Echelon - Bank landing page",
			image: images["../assets/featured/echelon.png"],
			webpImage: images["../assets/featured/echelon.png"],
			description: "Responsive & modern landing page for a Bank",
			tech: ["Reactjs", "TailwindCSS", "Framer motion", "Vercel"],
			link: "https://echelonbank.vercel.app/",
			featured: true,
		},
		{
			id: 1408,
			name: "CV Forge - Resume maker",
			image: images["../assets/featured/cvforge.png"],
			description: "A resume maker based on a professionnal template",
			tech: ["React", "Chakra UI", "Vite", "jspdf"],
			link: "https://cvforge.vercel.app/",
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
	];

	return {
		getAllProjects: projects.slice(),
		getFeaturedProjects: projects.filter((project) => project.featured),
	};
});
