import { FunctionComponent } from "react"

enum PagesName {
    Home = 'Главная',
    Albums = 'Альбомы'
}

enum PagesPath {
    Home = '/',
    Album = '/album/:id',
    Albums = '/list',
    Error = '*',
}

type TypeRoutes = Array<{ path: PagesPath, element: FunctionComponent }>

type NavigationItems = Array<{ path: PagesPath, label: PagesName }>

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
      other: number
    },
};

export {
    PagesName,
    PagesPath,
};

export type { 
    ITheme,
    NavigationItems,
    TypeRoutes,
};