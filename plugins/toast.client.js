import { defineNuxtPlugin } from "#app";
import Toast, { POSITION, useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
	const toast = useToast();
	nuxtApp.vueApp.use(Toast, {
		position: POSITION.TOP_RIGHT,
	});
	nuxtApp.provide("showToast", (msg, type, time = 5000) =>
		toast[type](msg, { timeout: time })
	);
});
