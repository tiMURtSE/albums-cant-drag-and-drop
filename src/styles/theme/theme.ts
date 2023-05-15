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
		200: "#D9D9D9",
		300: "#828282",
		700: "#474747",
		800: "#252427",
		900: "#121214",
		1000: "#000000",
	},
	secondary: {
		10: "#F9E9BC",
		20: "#59563d",
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
							main: colorTokens.secondary[10],
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
							main: colorTokens.secondary[20],
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
							default: colorTokens.primary[900],
							alt: colorTokens.primary[800],
						},
						contrastText: colorTokens.primary[100],
					},
			  }),
	};
};

export { theme, themeSettings };
