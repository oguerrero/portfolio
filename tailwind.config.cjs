/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,css,svelte}'],
	theme: {
		colors: {
			primary: colors.rose,
			secondary: colors.emerald,
			gray: colors.stone,
			white: colors.white,
			transparent: 'transparent',
			current: 'currentColor',
		},
		fontFamily: {
			sans: ['Montserrat', 'sans-serif'],
			fancy: ['Nunito', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
};
