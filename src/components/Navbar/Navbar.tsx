import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Content, Navigation, Theme } from "./Navbar.styled";
import { PagesPath, appTitle } from "consts";
import { setMode } from "store/themeSlice";
import Search from "./Searchbar/Searchbar";
import FlexBetween from "styles/components/FlexBetween.styled";
import ThemeIcon from "components/Icons/ThemeIcon/ThemeIcon";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";

const Navbar = () => {
	const dispatch = useDispatch();

	return (
		<Content>
			<FlexBetween gap="2rem">
				<StylishAlbumTitle>
					<NavLink to={PagesPath.Home}>{appTitle}</NavLink>
				</StylishAlbumTitle>

				<Navigation>
					<NavLink to={PagesPath.Home}>Главная</NavLink>
					<NavLink to={PagesPath.MyAlbums}>Мои альбомы</NavLink>
				</Navigation>

				<Search />
			</FlexBetween>

			<Theme onClick={() => dispatch(setMode())}>
				<ThemeIcon />
			</Theme>
		</Content>
	);
};

export default Navbar;
