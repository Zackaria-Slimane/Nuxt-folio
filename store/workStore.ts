import { defineStore } from "pinia";
import { WorkStore } from "~/types/typings";

export const useWorkStore = defineStore<string, WorkStore>("workStore", () => {
	const works = [
		{
			id: 3,
			name: "Nuitee",
			position: "Full stack developer",
			from: "October 2023",
			to: "Current position.",
			link: "http://nuitee.com",
		},
		{
			id: 1,
			name: "AD/HOC Agency",
			position: "Web Developer",
			from: " May 2022",
			to: "october  2023.",
			link: "http://adhocmaroc.com",
		},
		{
			id: 2,
			name: "OMNIYAT",
			position: "Junior front-end Developer",
			from: "September 2021",
			to: "May 2022.",
			link: "https://www.omniyat.ma/en/",
		},
	];

	return {
		getAllWorks: works.slice(),
	};
});
