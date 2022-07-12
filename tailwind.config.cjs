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
			orange: colors.orange,
			yellow: colors.yellow,
			green: colors.green,
			blue: colors.blue,
			red: colors.red,
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
