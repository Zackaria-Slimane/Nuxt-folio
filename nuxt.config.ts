// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@pinia/nuxt',
		'nuxt-simple-sitemap',
		'nuxt-simple-robots',
	],
	runtimeConfig: {
		public: {
			titleSeparator: '|',
			trailingSlash: true,
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://zackariasl.dev/',
			siteName: 'Zackaria SLIMANE - Frontend developer',
			siteDescription: 'Zackaria SLIMANE - Front-end Web Developer portfolio',
			language: 'en-US', // prefer more explicit language codes like `en-AU` over `en`
		},
		GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
	},

	nitro: {
		prerender: {
			crawlLinks: true,
			routes: [
				'/',
			]
		},
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
			titleTemplate: '%pageTitle %titleSeparator %siteName',
			title: "Zackaria SLIMANE - Front-end Web Developer",
			viewport: 'width=device-width, initial-scale=1.0',
			htmlAttrs: {
				lang: "en-US",
			},
			meta: [
				{ name: "description", content: "Zackaria SLIMANE - Front-end Web Developer portfolio" },
				{ name: "og:description", content: "Zackaria SLIMANE - Front-end Web Developer portfolio" },
				{ name: "twitter:description", content: "Zackaria SLIMANE - Front-end Web Developer portfolio" },
				{ name: "og:title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "twitter:title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ name: "application-name", content: "Zackaria SLIMANE - Front-end Web Developer portfolio" },
				{ name: "apple-mobile-web-app-title", content: "Zackaria SLIMANE - Front-end Web Developer" },
				{ charset: "UTF-8" },
			],
			link: [
				{ rel: "icon", href: "./favicon.ico" },
				{ rel: "canonical", href: "https://zackariasl.dev" },
				{ rel: "manifest", href: "./site.webmanifest" },
				{ rel: "apple-touch-icon", sizes: "180x180", href: "./apple-touch-icon.png" },
				{ rel: "icon", type: "image/png", sizes: "32x32", href: "./favicon-32x32.png" },
				{ rel: "icon", type: "image/png", sizes: "16x16", href: "./favicon-16x16.png" },
				{ rel: "mask-icon", href: "./safari-pinned-tab.svg", color: "#5bbad5" },
			],
			script: [
				{
					async: true,
					src: 'https://www.googletagmanager.com/gtag/js?id=G-VRCYTH918H',
				}, {
					async: true, children: ` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VRCYTH918H',{
  cookie_flags: 'max-age=7200;secure;samesite=none'
});` }],
		},
	},
})
