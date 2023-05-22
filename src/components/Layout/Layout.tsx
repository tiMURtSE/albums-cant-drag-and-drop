import Navbar from "components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Container, Header, Main, Paddings, Page } from "./Layout.styled";
import Footer from "components/Footer/Footer";

const Layout = () => {
	return (
		<Page>
			<Header>
				<Paddings>
					<Container header>
						<Navbar />
					</Container>
				</Paddings>
			</Header>

			<Main>
				<Paddings>
					<Container>
						<Outlet />
					</Container>
				</Paddings>
			</Main>

			<Footer />
		</Page>
	);
};

export default Layout;
