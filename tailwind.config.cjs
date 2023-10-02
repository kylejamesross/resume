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
		themes: ["dracula"],
		logs: false, 
	}
}
