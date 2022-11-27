/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"inter": ["Inter", "sans-serif"],
				"stix": ["STIX Two Text", "serif"],
			},
			colors: {
				text: "#222222",
				background: "#FAFAF6",
				backgroundAlt: "#EDE8E2",
				accent: "#E3B8B5",
				accent2: "#DA948F",
			}
		},

	},
	plugins: [],
}
