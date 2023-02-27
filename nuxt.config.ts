// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: '~/tailwind.config.js',
    },
    nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
		minify: true,
	},
    components: [{
        path: '~/components', pathPrefix: false,
    }],
    app: {
		pageTransition: { name: "page", mode: "out-in", type: "transition" },
		head: {
			title: "Zackaria SLIMANE - Front-end Web Developer",
			htmlAttrs: {
				lang: "en-US",
			},
			meta: [
				{ name: "description", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "og:description", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "twitter:description", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "og:title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "twitter:title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "application-name", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "apple-mobile-web-app-title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ charset: "utf-8" },
			],
		},
	},
})
