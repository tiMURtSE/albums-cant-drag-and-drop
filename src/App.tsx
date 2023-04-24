import CSSReset from 'styles/global/CSSReset.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from 'pages/home/Home';
import AlbumPage from 'pages/albumPage/AlbumPage';
import AlbumList from 'pages/albumList/AlbumList';
import Error from 'pages/error/Error';
import GlobalStyle from 'styles/global/GlobalStyle.styled';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme/theme';

function App() {
    return (
        <>
            <CSSReset />
            <GlobalStyle />

            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/album' element={<AlbumPage />} />
                        <Route path='/topAlbums' element={<AlbumList />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
