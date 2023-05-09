import { NavLink } from "react-router-dom";
import { NavigationItems } from "types";
import { Content, Header, Navigation, Title } from "./Navbar.styled";
import Paddings from "styles/components/Paddings.styled";
import Container from "styles/components/Container.styled";
import Search from "./Searchbar/Searchbar";
import { PagesName, PagesPath } from "consts/pages";

const appTitle = "BORINGAHHMUSIC";

const navigationItems: NavigationItems = [
	{ path: PagesPath.Home, label: PagesName.Home },
	{ path: PagesPath.Albums, label: PagesName.Albums },
];

const Navbar = () => {
	return (
		<Header>
			<Paddings>
				<Container header>
					<Content>
						<Title>
							<NavLink to={PagesPath.Home}>{appTitle}</NavLink>
						</Title>

						<Navigation>
							{navigationItems.map((item) => (
								<NavLink to={item.path} key={item.label}>
									{item.label}
								</NavLink>
							))}
						</Navigation>

						<Search />
					</Content>
				</Container>
			</Paddings>
		</Header>
	);
};

export default Navbar;
