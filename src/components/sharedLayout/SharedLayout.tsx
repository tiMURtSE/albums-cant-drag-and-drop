import Navbar from "components/navigation/Navbar";
import { Outlet } from "react-router-dom";
import Main from "./SharedLayout.styled";

type Props = {};

const SharedLayout = (props: Props) => {
    return (
        <>
            <Navbar />

            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default SharedLayout;