import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "hooks";
import Layout from "components/Layout/Layout";
import Album from "pages/Album/Album";
import Auth from "pages/Auth/Auth";
import Error from "pages/Error/Error";
import Home from "pages/Home/Home";
import Search from "pages/Search/Search";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global/GlobalStyle.styled";
import { themeSettings } from "theme/theme";
import { AppRoutes } from "consts/app-routes";
import Collection from "pages/Collection/Collection";

function App() {
	const mode = useAppSelector((state) => state.theme.mode);
	const theme = useMemo(() => themeSettings(mode), [mode]);

	return (
		<div className="App">
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStyle />

					<Routes>
						<Route path={AppRoutes.HOME} element={<Layout />}>
							<Route index element={<Home />}/>
							<Route path={AppRoutes.ALBUM} element={<Album />}/>
							<Route path={AppRoutes.AUTH} element={<Auth />}/>
							<Route path={AppRoutes.COLLECTION} element={<Collection />}/>
							<Route path={AppRoutes.SEARCH_RESULTS} element={<Search />}/>
							<Route path={AppRoutes.ERROR} element={<Error />}/>
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
