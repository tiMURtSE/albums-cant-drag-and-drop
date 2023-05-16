import Navbar from "components/Navbar/Navbar";
import { Main, Page } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Paddings from "styles/components/Paddings.styled";
import Container from "styles/components/Container.styled";

const Layout = () => {
	return (
		<Page>
			<Navbar />
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
