interface ITheme {
    colors: {
      primary: string
      secondary: string
      grey: {
        light: string
        neutral: string
        dark: string
      }
    }
  
    media: {
      extraLarge: string
      large: string
      medium: string
      small: string
    }
  
    sizes: {
      header: { height: string }
      container: { header: string, content: string }
      footer: { height: number }
      font: { small: string, regular: string, large: string }
      modal: { width: number }
      borderRadius: string
    }
  
    durations: {
      ms300: number
    }
  
    order: {
      header: number
      modal: number
    },

    zIndexes: {
        header: number
    }
};

export type { ITheme };