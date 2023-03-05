import { defineStore } from "pinia";
import { StackStore } from "../types/typings";

// @ts-ignore

export const useStackStore = defineStore<string, StackStore>("stackStore", () => {
  const stacks = [
    {
      id: 1,
      name: "Vue",
      image: "https://img.shields.io/badge/vue-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D",
    },
    {
      id: 14,
      name: "React",
      image: "https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react&logoColor=white",
    },
    {
      id: 2,
      name: "Nuxt",
      image: "https://img.shields.io/badge/Nuxt-%234ea94b.svg?style=for-the-badge&logo=nuxt.js&logoColor=white",
    },
    {
      id: 3,
      name: "javaScript - es6",
      image: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
    },
    {
      id: 4,
      name: "Bootstrap Css",
      image: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    },
    {
      id: 13,
      name: "SupaBase",
      image: "https://img.shields.io/badge/SupaBase-darkgreen.svg?style=for-the-badge&logo=supabase&logoColor=white",
    },
    {
      id: 5,
      name: "Tailwind Css",
      image: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    },
    {
      id: 6,
      name: "Node Js",
      image: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    },
    {
      id: 7,
      name: "Express JS",
      image: "https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
    },
    {
      id: 8,
      name: "jQuery",
      image: "https://img.shields.io/badge/jQuery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white",
    },
    {
      id: 9,
      name: "MongoDB",
      image: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    },
    {
      id: 10,
      name: "PostgreSQL",
      image: "https://img.shields.io/badge/PostgreSQL-informational.svg?style=for-the-badge&logo=postgresql&logoColor=white",
    },
    {
      id: 11,
      name: "Figma",
      image: "https://img.shields.io/badge/Figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
    },
    {
      id: 13,
      name: "Netlify",
      image: "https://img.shields.io/badge/Netlify-%23404d59.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7",
    },
    {
      id: 12,
      name: "Postman",
      image: "https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white",
    },
    {
      id: 15,
      name: "Wordpress",
      image: "https://img.shields.io/badge/WordPress-%23404d59.svg?style=for-the-badge&logo=wordpress&logoColor=#00C7B7",
    },
    {
      id: 16,
      name: "Shopify",
      image: "https://img.shields.io/badge/Shopify-%23404d59.svg?style=for-the-badge&logo=shopify&logoColor=#00C7B7",
    },
  ];

  return {
    getAllStacks: stacks.slice(),
  };
})
