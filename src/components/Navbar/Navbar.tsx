import { NavLink } from "react-router-dom";
import { NavigationItems } from "types";
import { Content, Header, Navigation, Theme, Title } from "./Navbar.styled";
import Paddings from "styles/components/Paddings.styled";
import Container from "styles/components/Container.styled";
import Search from "./Searchbar/Searchbar";
import { PagesName, PagesPath } from "consts/pages";
import { useDispatch } from "react-redux";
import FlexBetween from "styles/components/FlexBetween.styled";
import ThemeIcon from "components/Icons/ThemeIcon/ThemeIcon";
import { setMode } from "store/themeSlice";

const appTitle = "SCARINGTHECUSTOMHOOKS";

const navigationItems: NavigationItems = [
	{ path: PagesPath.Home, label: PagesName.Home },
	{ path: PagesPath.MyAlbums, label: PagesName.MyAlbums },
];

const Navbar = () => {
	const dispatch = useDispatch();

	return (
		<Header>
			<Paddings>
				<Container header>
					<Content>
						<FlexBetween gap="2rem">
							<Title>
								<NavLink to={PagesPath.Home}>
									{appTitle}
								</NavLink>
							</Title>

							<Navigation>
								{navigationItems.map((item) => (
									<NavLink to={item.path} key={item.label}>
										{item.label}
									</NavLink>
								))}
							</Navigation>

							<Search />
						</FlexBetween>

						<Theme onClick={() => dispatch(setMode())}>
							<ThemeIcon />
						</Theme>
					</Content>
				</Container>
			</Paddings>
		</Header>
	);
};

export default Navbar;
