import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PagesPath, TypeRoutes } from 'types';
import CSSReset from 'styles/global/CSSReset.styled';
import GlobalStyle from 'styles/global/GlobalStyle.styled';
import Home from 'pages/Home/Home';
import AlbumList from 'pages/AlbumList/AlbumList';
import AlbumPage from 'pages/AlbumPage/AlbumPage';
import Error from 'pages/Error/Error';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme/theme';

const routes: TypeRoutes = [
    { path: PagesPath.Home, element: Home },
    { path: PagesPath.Albums, element: AlbumList },
    { path: PagesPath.Album, element: AlbumPage },
    { path: PagesPath.Error, element: Error },
];

function App() {
    return (
        <>
            <CSSReset />
            <GlobalStyle />

            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Routes>
                        {routes.map(route =>
                            <Route
                                path={route.path}
                                element={<route.element />}
                                key={route.path}
                            />
                        )}
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
