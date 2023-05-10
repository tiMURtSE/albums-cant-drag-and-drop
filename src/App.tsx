import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home/Home";
import AlbumList from "pages/AlbumList/AlbumList";
import AlbumPage from "pages/AlbumPage/AlbumPage";
import Error from "pages/Error/Error";
import Search from "pages/Search/Search";
import { PagesPath } from "consts/pages";
import { TypeRoutes } from "types";
import Layout from "components/Layout/Layout";

const routes: TypeRoutes = [
	{ path: PagesPath.Albums, element: AlbumList },
	{ path: PagesPath.Album, element: AlbumPage },
	{ path: PagesPath.Search, element: Search },
	{ path: PagesPath.Error, element: Error },
];

function App() {
	return (
		<BrowserRouter>
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
		</BrowserRouter>
	);
}

export default App;
