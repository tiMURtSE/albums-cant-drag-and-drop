import Navbar from "components/Navbar/Navbar";
import { Main, Page } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/Footer";

const Layout = () => {
	return (
		<Page>
			<Navbar />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</Page>
	);
};

export default Layout;
