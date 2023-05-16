import { NavLink } from "react-router-dom";
import { Content, Header, Navigation, Theme, Title } from "./Navbar.styled";
import Paddings from "styles/components/Paddings.styled";
import Container from "styles/components/Container.styled";
import Search from "./Searchbar/Searchbar";
import { useDispatch } from "react-redux";
import FlexBetween from "styles/components/FlexBetween.styled";
import ThemeIcon from "components/Icons/ThemeIcon/ThemeIcon";
import { setMode } from "store/themeSlice";
import { PagesPath, appTitle } from "consts";

const Navbar = () => {
	const dispatch = useDispatch();

	return (
		<Header>
			<Paddings>
				<Container header>
					<Content>
						<FlexBetween gap="2rem">
							<Title>
								<NavLink to={PagesPath.Home}>{appTitle}</NavLink>
							</Title>

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
				</Container>
			</Paddings>
		</Header>
	);
};

export default Navbar;
