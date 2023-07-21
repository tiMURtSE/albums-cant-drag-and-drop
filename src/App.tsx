import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "hooks";
import Layout from "components/Layout/Layout";
import { PagesPath } from "consts";
import Album from "pages/Album/Album";
import Auth from "pages/Auth/Auth";
import Error from "pages/Error/Error";
import Home from "pages/Home/Home";
import MyAlbums from "pages/MyAlbums/MyAlbums";
import Search from "pages/Search/Search";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global/GlobalStyle.styled";
import { themeSettings } from "theme/theme";

function App() {
	const mode = useAppSelector((state) => state.theme.mode);
	const theme = useMemo(() => themeSettings(mode), [mode]);

	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />

					<Routes>
						<Route
							path={PagesPath.Home}
							element={<Layout />}
						>
							<Route
								index
								element={<Home />}
							/>
							<Route
								path={PagesPath.Album}
								element={<Album />}
							/>
							<Route
								path={PagesPath.Auth}
								element={<Auth />}
							/>
							<Route
								path={PagesPath.MyAlbums}
								element={<MyAlbums />}
							/>
							<Route
								path={PagesPath.Search}
								element={<Search />}
							/>
							<Route
								path={PagesPath.Error}
								element={<Error />}
							/>
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
