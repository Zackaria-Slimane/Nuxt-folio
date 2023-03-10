import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
  state: () => {
    return {
      theme: "light",
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
