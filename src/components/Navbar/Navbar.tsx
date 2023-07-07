import { NavLink, useNavigate } from "react-router-dom";
import { Content, Navigation, Theme } from "./Navbar.styled";
import { NavigationItems, PagesPath, appTitle } from "consts";
import { setMode } from "store/themeSlice";
import Searchbar from "./components/Searchbar/Searchbar";
import FlexBetween from "styles/components/FlexBetween.styled";
import ThemeIcon from "components/Icons/ThemeIcon";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import AuthIcon from "components/Icons/AuthIcon";
import { useAppDispatch } from "hooks";
import { IconWrapper } from "styles/components/IconWrapper.styled";
import { ReactComponent as BurgerIcon } from "assets/icons/burger.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { useMediaQuery } from "hooks/useMediaQuery";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import { openSideNavbar } from "utils/openSideNavbar";
import { theme } from "theme/theme";
import ModalWindow from "components/ModalWindow/ModalWindow";
import SearchbarModal from "./components/SearchbarModal/SearchbarModal";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const mediaQuery = theme.media.extraLarge;
	const isBelowAverageScreens = useMediaQuery(mediaQuery);

	return (
		<Content>
			<FlexBetween gap="2rem">
				<StylishAlbumTitle>
					<NavLink to={PagesPath.Home}>{appTitle}</NavLink>
				</StylishAlbumTitle>

				<Navigation>
					{NavigationItems.map((item) => (
						<NavLink
							to={item.path}
							key={item.path}
						>
							{item.title}
						</NavLink>
					))}
				</Navigation>

				{!isBelowAverageScreens && <Searchbar />}
			</FlexBetween>

			<FlexBetween gap={isBelowAverageScreens ? "1rem" : "2rem"}>
				{isBelowAverageScreens && (
					<IconWrapper
						width="20px"
						height="20px"
						onClick={() => openSideNavbar("searchbar-modal")}
					>
						<SearchIcon />
					</IconWrapper>
				)}

				<ThemeIcon onClick={() => dispatch(setMode())} />

				<AuthIcon onClick={() => navigate(PagesPath.Auth)} />

				{isBelowAverageScreens && (
					<IconWrapper
						width="25px"
						height="25px"
						onClick={() => openSideNavbar("side-navbar")}
					>
						<BurgerIcon />
					</IconWrapper>
				)}
			</FlexBetween>

			{isBelowAverageScreens && <SideNavbar id="side-navbar" />}

			{isBelowAverageScreens && <SearchbarModal id="searchbar-modal" />}
		</Content>
	);
};

export default Navbar;
