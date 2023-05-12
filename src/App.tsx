import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import AlbumList from "pages/AlbumList/AlbumList";
import AlbumPage from "pages/AlbumPage/AlbumPage";
import Error from "pages/Error/Error";
import Search from "pages/Search/Search";
import { PagesPath } from "consts/pages";
import { TypeRoutes } from "types";
import Layout from "components/Layout/Layout";
import { ThemeProvider } from "styled-components";
import CSSReset from "styles/global/CSSReset.styled";
import GlobalStyle from "styles/global/GlobalStyle.styled";
import { useSelector } from "react-redux";
import { themeMods } from "consts/themeMods";
import { useMemo } from "react";
import { themeSettings } from "styles/theme/theme";

const routes: TypeRoutes = [
	{ path: PagesPath.Albums, element: AlbumList },
	{ path: PagesPath.Album, element: AlbumPage },
	{ path: PagesPath.Search, element: Search },
	{ path: PagesPath.Error, element: Error },
];

function App() {
	const mode = useSelector(
		(state: { theme: { mode: themeMods } }) => state.theme.mode
	);
	const theme = useMemo(() => themeSettings(mode), [mode]);

	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CSSReset />
					<GlobalStyle />

					<Routes>
						<Route path={PagesPath.Home} element={<Layout />}>
							<Route index element={<Home />} />
							{routes.map((route) => (
								<Route
									path={route.path}
									element={<route.element />}
									key={route.path}
								/>
							))}
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
