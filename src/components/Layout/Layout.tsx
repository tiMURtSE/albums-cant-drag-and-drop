import Navbar from "components/Navbar/Navbar";
import { Main } from "./Layout.styled";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer/Footer";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
};

export default Layout;
