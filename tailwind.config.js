/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				garden: {
					primary: 'rgb(113, 142, 107)',
					secondary: 'rgb(223, 220, 229)',
					accent: 'rgb(133, 105, 140)',
					neutral: 'rgb(27, 29, 22)',
					'base-100': 'rgb(239, 240, 235)'
				},
				october: {
					primary: '#ff6d4d',
					secondary: '#e6e6e5',
					accent: '#d12600',
					neutral: '#262626',
					'base-100': '#fafafa'
				}
			}
		]
	}
};
