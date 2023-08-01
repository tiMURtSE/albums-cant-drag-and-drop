import { useEffect } from "react";
import { Outlet, useLocation, useParams, useSearchParams } from "react-router-dom";
import Footer from "components/Footer/Footer";
import Navbar from "components/Navbar/Navbar";
import { Paddings } from "styles/components/Paddings.styled";
import { Container, Header, Main, Page } from "./Layout.styled";

const Layout = () => {
	const pathname = useLocation().pathname;
	const isCurrentPageAlbum = pathname.includes("/album");

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<Page>
			<Header>
				<Paddings>
					<Container header>
						<Navbar />
					</Container>
				</Paddings>
			</Header>

			<Main isCurrentPageAlbum={isCurrentPageAlbum}>
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
