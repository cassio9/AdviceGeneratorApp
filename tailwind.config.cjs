/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				LightCya: "hsl(193, 38%, 86%)",
				NeonGreen: "hsl(150, 100%, 66%)",
				GrayishBlue: "hsl(217, 19%, 38%)",
				DarkGrayishBlue: "hsl(217, 19%, 24%)",
				DarkBlue: "hsl(218, 23%, 16%)",
			},
			fontFamily: {
				Manrope: ["Manrope", "sans-serif"],
			},
		},
	},
	plugins: [],
};
