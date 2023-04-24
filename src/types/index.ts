enum PagesName {
    Home = 'Главная',
    Albums = 'Альбомы'
}

enum PagesPath {
    Home = '/',
    Albums = '/list',
}

type NavigationItems = [
    { path: PagesPath, label: PagesName },
    { path: PagesPath, label: PagesName },
]

interface ITheme {
    colors: {
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
      modal: { width: number }
      borderRadius: string
    }

    fonts: { 
        small: string
        regular: string
        large: string
        extraLarge: string
    }
  
    durations: {
      ms300: number
    }
  
    order: {
      header: number
      modal: number
    },
};

export {
    PagesName,
    PagesPath,
};

export type { 
    ITheme,
    NavigationItems,
};