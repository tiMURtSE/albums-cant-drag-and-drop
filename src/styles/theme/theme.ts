import { themeMods } from "consts/themeMods";
import { ITheme } from "./theme.interface";

const theme: ITheme = {
	colors: {
		grey: {
			light: "#f5f5f5",
			neutral: "#d4d4d4",
			dark: "#555",
		},
		yellow: {
			light: "#faffd6",
		},
		primary: "#fff",
	},

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

const themeSettings = (mode: themeMods) => {
	return {
		mode: mode,
		...(mode === themeMods.Light
			? {
					...theme,
			  }
			: {
					...theme,
					colors: {
						grey: {
							light: "#3a393d",
							neutral: "#252427",
							dark: "#121214",
						},
						yellow: {
							light: "#708001",
						},
						primary: "#121214",
					},
			  }),
	};
};

export { theme, themeSettings };
