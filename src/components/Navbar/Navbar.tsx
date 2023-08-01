import { NavLink, useNavigate } from "react-router-dom";
import { setMode } from "store/reducers/themeSlice";
import { useAppDispatch } from "hooks";
import { useMediaQuery } from "hooks/useMediaQuery";
import IconButton from "components/UI/IconButton/IconButton";
import { AppRoutes } from "consts/app-routes";
import { NAVIGATION } from "consts/constants";
import FlexBetween from "styles/components/FlexBetween.styled";
import { theme } from "theme/theme";
import { openSideNavbar } from "utils/openSideNavbar";
import { ReactComponent as BurgerIcon } from "assets/icons/burger.svg";
import { ReactComponent as ProfileIcon } from "assets/icons/profile.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as ThemeIcon } from "assets/icons/theme.svg";
import * as Styled from "./Navbar.styled";
import Searchbar from "./components/Searchbar/Searchbar";
import SearchbarModal from "./components/SearchbarModal/SearchbarModal";
import SideNavbar from "./components/SideNavbar/SideNavbar";

export const APP_TITLE = "SCARINGTHEHOOKS";

const Navbar = () => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const extraLargeScreenSize = theme.media.extraLarge;
	const isBelowExtraLargeScreens = useMediaQuery(extraLargeScreenSize);

	return (
		<Styled.Container>
			<FlexBetween gap={isBelowExtraLargeScreens ? "1rem" : "2rem"}>
				<Styled.Title>
					<NavLink to={AppRoutes.HOME}>{APP_TITLE}</NavLink>
				</Styled.Title>

				<Styled.Navigation>
					{NAVIGATION.map((item) => (
						<NavLink
							to={item.path}
							key={item.path}
						>
							{item.title}
						</NavLink>
					))}
				</Styled.Navigation>

				{!isBelowExtraLargeScreens && <Searchbar />}
			</FlexBetween>

			<FlexBetween gap="0.5rem">
				{isBelowExtraLargeScreens ? (
					<>
						<IconButton onClick={() => openSideNavbar("searchbar-modal")}>
							<SearchIcon />
						</IconButton>

						<IconButton onClick={() => navigate(AppRoutes.AUTH)}>
							<ProfileIcon />
						</IconButton>

						<IconButton
							width="25px"
							height="25px"
							onClick={() => openSideNavbar("side-navbar")}
						>
							<BurgerIcon />
						</IconButton>
					</>
				) : (
					<>
						<IconButton onClick={() => dispatch(setMode())}>
							<ThemeIcon />
						</IconButton>

						<IconButton onClick={() => navigate(AppRoutes.AUTH)}>
							<ProfileIcon />
						</IconButton>
					</>
				)}
			</FlexBetween>

			{isBelowExtraLargeScreens && (
				<>
					<SideNavbar id="side-navbar" />
					<SearchbarModal id="searchbar-modal" />
				</>
			)}
		</Styled.Container>
	);
};

export default Navbar;
