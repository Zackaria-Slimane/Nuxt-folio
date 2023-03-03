import { defineStore } from "pinia";
import { WorkStore } from "~/types/typings";

export const useWorkStore = defineStore<string, WorkStore>("workStore", () => {
	const works = [
		{
			id: 1,
			name: "AD/HOC Agency",
			position: "Web Developer",
			from: " May 2022",
			to: "Current position.",
			link: "http://adhocmaroc.com",
		},
		{
			id: 2,
			name: "OMNIYAT",
			position: "Junior front-end Developer",
			from: "September 2021",
			to: "May 2022.",
			link: "https://www.omniyat.ma/en/",
		}
	]

	return {
		getAllWorks: works.slice()
	}
})
