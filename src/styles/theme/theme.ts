import { themeMods } from "consts/themeMods";
import { ITheme } from "./theme.interface";

const theme = {
	media: {
		extraLarge: "(max-width: 1140px)",
		large: "(max-width: 960px)",
		medium: "(max-width: 720px)",
		small: "(max-width: 540px)",
	},

	sizes: {
		header: { height: "64px" },
		container: { header: "1200px", list: "998px" },
		footer: { height: 128 },
		modal: { width: 540 },
		borderRadius: "12px",
	},

	fonts: {
		small: "14px",
		regular: "16px",
		large: "24px",
		extraLarge: "48px",
	},

	durations: {
		ms300: 300,
	},

	order: {
		header: 50,
		modal: 100,
		other: 10,
	},
};

const colorTokens = {
	primary: {
		0: "#FFFFFF",
		100: "#EEEEEE",
		200: "#b3b3b3",
		300: "#828282",
		700: "#474747",
		800: "#121214",
		900: "#000000",
	},
	grey: {
		0: "#FFFFFF",
		10: "#F6F6F6",
		50: "#F0F0F0",
		100: "#E0E0E0",
		200: "#C2C2C2",
		300: "#A3A3A3",
		400: "#858585",
		500: "#666666",
		600: "#4D4D4D",
		700: "#333333",
		800: "#1A1A1A",
		900: "#0A0A0A",
		1000: "#000000",
	},
};

const themeSettings = (mode: themeMods): ITheme => {
	return {
		mode: mode,
		...(mode === themeMods.Light
			? {
					...theme,
					colors: {
						primary: {
							dark: colorTokens.primary[300],
							neutral: colorTokens.primary[200],
							light: colorTokens.primary[100],
						},
						secondary: {
							dark: colorTokens.primary[700],
							neutral: colorTokens.primary[700],
							light: colorTokens.primary[100],
						},
						grey: {
							light: "#3a393d",
							neutral: "#252427",
							dark: "#121214",
						},
						yellow: {
							light: "#708001",
						},
						background: {
							default: colorTokens.primary[0],
							alt: colorTokens.primary[100],
						},
						contrastText: colorTokens.primary[900],
					},
			  }
			: {
					...theme,
					colors: {
						primary: {
							dark: colorTokens.primary[300],
							neutral: colorTokens.primary[700],
							light: colorTokens.primary[800],
						},
						secondary: {
							dark: colorTokens.primary[100],
							neutral: colorTokens.primary[300],
							light: colorTokens.primary[700],
						},
						grey: {
							light: "#3a393d",
							neutral: "#252427",
							dark: "#121214",
						},
						yellow: {
							light: "#708001",
						},
						background: {
							default: colorTokens.primary[800],
							alt: colorTokens.primary[700],
						},
						contrastText: colorTokens.primary[100],
					},
			  }),
	};
};

export { theme, themeSettings };
