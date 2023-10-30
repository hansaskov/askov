/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				text: 'rgb(27, 29, 22)',
				background: 'rgb(239, 240, 235)',
				primary: 'rgb(113, 142, 107)',
				secondary: 'rgb(223, 220, 229)',
				accent: 'rgb(133, 105, 140)'
			},

			fontSize: {
				sm: '0.750rem',
				base: '1rem',
				xl: '1.333rem',
				'2xl': '1.777rem',
				'3xl': '2.369rem',
				'4xl': '3.158rem',
				'5xl': '4.210rem'
			},
			fontFamily: {
				heading: 'Poppins',
				body: 'Noto Sans Old South Arabian'
			},
			fontWeight: {
				normal: '400',
				bold: '700'
			}
		}
	},
	plugins: []
};
