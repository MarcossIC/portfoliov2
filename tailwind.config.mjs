/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				manrope: ['Manrope', 'sans-serif'],
			},
			backgroundImage: {
				'ml-text-white': 'var(--ml-text-white)',
			},
			animation: {
				meteor: "meteor 5s linear infinite",
				"border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
			},
			keyframes: {
				meteor: {
					"0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
					"70%": { opacity: 1 },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: 0,
					},
				},
				"border-beam": {
					"100%": {
						"offset-distance": "100%",
					},
				},
			},
		},
	},
	plugins: [],
}
