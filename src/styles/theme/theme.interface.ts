interface ITheme {
	colors: {
		grey: {
			light: string;
			neutral: string;
			dark: string;
		};
		yellow: {
			light: string;
		};
	};

	media: {
		extraLarge: string;
		large: string;
		medium: string;
		small: string;
	};

	sizes: {
		header: { height: string };
		container: { header: string; list: string };
		footer: { height: number };
		modal: { width: number };
		borderRadius: string;
	};

	fonts: {
		small: string;
		regular: string;
		large: string;
		extraLarge: string;
	};

	durations: {
		ms300: number;
	};

	order: {
		header: number;
		modal: number;
		other: number;
	};
}

export type { ITheme };
