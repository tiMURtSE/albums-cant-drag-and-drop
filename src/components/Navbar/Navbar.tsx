import { NavLink, useNavigate } from "react-router-dom";
import { Content, NavbarTitle, Navigation } from "./Navbar.styled";
import { APP_TITLE, navigationItems, PagesPath } from "consts";
import { setMode } from "store/themeSlice";
import Searchbar from "./components/Searchbar/Searchbar";
import FlexBetween from "styles/components/FlexBetween.styled";
import { useAppDispatch } from "hooks";
import { ReactComponent as BurgerIcon } from "assets/icons/burger.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as ThemeIcon } from "assets/icons/theme.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profile.svg";
import { useMediaQuery } from "hooks/useMediaQuery";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import { openSideNavbar } from "utils/openSideNavbar";
import { theme } from "theme/theme";
import SearchbarModal from "./components/SearchbarModal/SearchbarModal";
import { ButtonIconWrapper } from "styles/components/ButtonIconWrapper.styled";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const isLoggedIn = true;
	const mediaQuery = theme.media.extraLarge;
	const isBelowLargeScreens = useMediaQuery(mediaQuery);

	return (
		<Content>
			<FlexBetween gap={isBelowLargeScreens ? "1rem" : "2rem"}>
				{isBelowLargeScreens && (
					<ButtonIconWrapper
						type="button"
						width="25px"
						height="25px"
						onClick={() => openSideNavbar("side-navbar")}
					>
						<BurgerIcon />
					</ButtonIconWrapper>
				)}

				<NavbarTitle>
					<NavLink to={PagesPath.Home}>{APP_TITLE}</NavLink>
				</NavbarTitle>

				<Navigation>
					{navigationItems.map((item) => (
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

			<FlexBetween gap="0.5rem">
				{isBelowLargeScreens ? (
					<ButtonIconWrapper
						type="button"
						width="20px"
						height="20px"
						onClick={() => openSideNavbar("searchbar-modal")}
					>
						<SearchIcon />
					</ButtonIconWrapper>
				) : (
					<ButtonIconWrapper
						type="button"
						width="20px"
						height="20px"
						onClick={() => dispatch(setMode())}
					>
						<ThemeIcon />
					</ButtonIconWrapper>
				)}
				<ButtonIconWrapper
					type="button"
					width="20px"
					height="20px"
					onClick={() => navigate(PagesPath.Auth)}
				>
					<ProfileIcon />
				</ButtonIconWrapper>
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
