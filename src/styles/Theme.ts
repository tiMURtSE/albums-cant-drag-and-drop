import { ITheme } from "../types/interface/index.interface";

const theme: ITheme = {
    colors: {
        primary: '#212121',
        secondary: '#696969',
    },
  
    media: {
        extraLarge: '(max-width: 1140px)',
        large: '(max-width: 960px)',
        medium: '(max-width: 720px)',
        small: '(max-width: 540px)',
    },
  
    sizes: {
        header: { height: 56 },
        container: { width: 1200 },
        footer: { height: 128 },
        modal: { width: 540 },
    },
  
    durations: {
        ms300: 300,
    },
  
    order: {
        header: 50,
        modal: 100,
    },
};

export { theme };