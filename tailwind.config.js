/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				light: {
					primary: "#2f315b",
					secondary: "#c388bd",
					accent: "#8a476c",
					neutral: "#1a1d32",
					"base-100": "#eeeff6",
				},
				/*
				dark: {
					"primary": "#a4a6d0",
					"secondary": "#773c71",
					"accent": "#b8759a",
					"neutral": "#1a1d32",
					"base-100": "#090a11",
				  },
				*/
				spring: {
					primary: 'rgb(113, 142, 107)',
					secondary: 'rgb(223, 220, 229)',
					accent: 'rgb(133, 105, 140)',
					neutral: 'rgb(27, 29, 22)',
					'base-100': 'rgb(239, 240, 235)'
				},
				fall: {
					primary: '#ff6d4d',
					secondary: '#e6e6e5',
					accent: '#d12600',
					neutral: '#262626',
					'base-100': '#fafafa'
				},

			}
		]
	}
};


