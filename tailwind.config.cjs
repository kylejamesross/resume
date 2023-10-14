module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		listStyleType: {
			square: 'square'
		}
	},
	plugins: [require("daisyui")],
	daisyui: {

		themes: [
			{
				dracula: {
					...require("daisyui/src/theming/themes")["[data-theme=dracula]"],
					"primary": "hsl(330.24deg 100% 63%)",
					"primary-focus": "hsl(330.24deg 100% 58%)",
				},
			},
		],
		logs: false, 
	}
}
