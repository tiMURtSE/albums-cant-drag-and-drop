import { NavLink, useNavigate } from "react-router-dom";
import { Content, NavbarTitle, Navigation, Theme } from "./Navbar.styled";
import { NavigationItems, PagesPath, appTitle } from "consts";
import { setMode } from "store/themeSlice";
import Searchbar from "./components/Searchbar/Searchbar";
import FlexBetween from "styles/components/FlexBetween.styled";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import { useAppDispatch } from "hooks";
import { IconWrapper } from "styles/components/IconWrapper.styled";
import { ReactComponent as BurgerIcon } from "assets/icons/burger.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as ThemeIcon } from "assets/icons/theme.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profile.svg";
import { useMediaQuery } from "hooks/useMediaQuery";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import { openSideNavbar } from "utils/openSideNavbar";
import { theme } from "theme/theme";
import SearchbarModal from "./components/SearchbarModal/SearchbarModal";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const mediaQuery = theme.media.extraLarge;
	const isBelowLargeScreens = useMediaQuery(mediaQuery);

	return (
		<Content>
			<FlexBetween gap="2rem">
				<NavbarTitle>
					<NavLink to={PagesPath.Home}>{appTitle}</NavLink>
				</NavbarTitle>

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

				{!isBelowLargeScreens && <Searchbar />}
			</FlexBetween>

			<FlexBetween gap={isBelowLargeScreens ? "1rem" : "2rem"}>
				{isBelowLargeScreens ? (
					<>
						<IconWrapper
							width="20px"
							height="20px"
							onClick={() => openSideNavbar("searchbar-modal")}
						>
							<SearchIcon />
						</IconWrapper>

						<IconWrapper
							width="25px"
							height="25px"
							onClick={() => openSideNavbar("side-navbar")}
						>
							<BurgerIcon />
						</IconWrapper>
					</>
				) : (
					<>
						<IconWrapper
							width="20px"
							height="20px"
							onClick={() => dispatch(setMode())}
						>
							<ThemeIcon />
						</IconWrapper>

						<IconWrapper
							width="20px"
							height="20px"
							onClick={() => navigate(PagesPath.Auth)}
						>
							<ProfileIcon />
						</IconWrapper>
					</>
				)}
			</FlexBetween>

			{isBelowLargeScreens && (
				<>
					<SideNavbar id="side-navbar" />
					<SearchbarModal id="searchbar-modal" />
				</>
			)}
		</Content>
	);
};

export default Navbar;
