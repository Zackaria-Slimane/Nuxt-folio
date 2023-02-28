// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'@nuxtjs/fontaine',

	],
	runtimeConfig: {
		GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
	},

	tailwindcss: {
		cssPath: '~/assets/css/tailwind.css',
		configPath: '~/tailwind.config.js',
		exposeConfig: true
	},
	nitro: {
		compressPublicAssets: {
			gzip: true,
			brotli: true,
		},
		minify: true,
	},
	ssr: true,
	components: [{
		path: '~/components', pathPrefix: false,
	}],
	app: {
		pageTransition: { name: "page", mode: "out-in", type: "transition" },
		head: {
			title: "Zackaria SLIMANE - Front-end Web Developer",
			viewport: 'width=device-width, initial-scale=1.0',
			htmlAttrs: {
				lang: "en",
			},
			meta: [
				{ name: "description", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "og:description", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "twitter:description", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "og:title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "twitter:title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "application-name", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "apple-mobile-web-app-title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ charset: "UTF-8" },
			],
			link: [
				{ rel: "icon", href: "./favicon.ico" },
				{ rel: "manifest", href: "./site.webmanifest" },
				{ rel: "apple-touch-icon", sizes: "180x180", href: "./apple-touch-icon.png" },
				{ rel: "icon", type: "image/png", sizes: "32x32", href: "./favicon-32x32.png" },
				{ rel: "icon", type: "image/png", sizes: "16x16", href: "./favicon-16x16.png" },
				{ rel: "mask-icon", href: "./safari-pinned-tab.svg", color: "#5bbad5" },
			],
			script: [
				{
					async: true,
					src: 'https://www.googletagmanager.com/gtag/js?id=G-LRTBDF1P56',
				}, {
					async: true, children: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LRTBDF1P56');
	console.log('gtag loaded')` }],
		},
	},
})
