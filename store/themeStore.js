import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => {
    return {
      theme: "dark",
    }
  },
  actions: {
    setTheme(newTheme) {
      this.theme = newTheme
    },
  },
  getters: {
    getCurrentTheme: (state) => {
      return state.theme;
    },
  },
});
