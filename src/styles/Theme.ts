import { ITheme } from "../types";

const theme: ITheme = {
    colors: {
        primary: '#212121',
        secondary: '#696969',
        grey: {
            light: '#f5f5f5',
            neutral: '#d4d4d4',
            dark: '#999',
        }
    },
  
    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },
  
    sizes: {
        header: { height: '64px' },
        container: { header: '1200px', content: '998px' },
        footer: { height: 128 },
        font: { small: '14px', regular: '16px', large: '24px' },
        modal: { width: 540 },
        borderRadius: '12px',
    },
  
    durations: {
        ms300: 300,
    },
  
    order: {
        header: 50,
        modal: 100,
    },

    zIndexes: {
        header: 10,
    }
};

export { theme };