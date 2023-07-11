import Navbar from "components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Container, Header, Main, Page } from "./Layout.styled";
import Footer from "components/Footer/Footer";
import { Paddings } from "styles/components/Paddings.styled";

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
