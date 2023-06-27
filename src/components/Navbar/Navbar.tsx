import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Content, Navigation, Theme } from "./Navbar.styled";
import { PagesPath, appTitle } from "consts";
import { setMode } from "store/themeSlice";
import Searchbar from "./Searchbar/Searchbar";
import FlexBetween from "styles/components/FlexBetween.styled";
import ThemeIcon from "components/Icons/ThemeIcon";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import AuthIcon from "components/Icons/AuthIcon";
import { useAppDispatch } from "hooks";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

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

				<Searchbar />
			</FlexBetween>

			<FlexBetween gap="2rem">
				<ThemeIcon onClick={() => dispatch(setMode())} />

				<AuthIcon onClick={() => navigate(PagesPath.Auth)} />
			</FlexBetween>
		</Content>
	);
};

export default Navbar;
