import { Outlet } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import { Paddings } from "styles/components/Paddings.styled";
import { Container, Header, Main, Page } from "./Layout.styled";

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
