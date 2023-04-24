import { NavLink } from 'react-router-dom';
import { PagesPath } from 'types';
import { navigationItems, pageTitle } from 'utils/consts';
import { Content, Header, Navigation, Title } from './Navbar.styled';
import Paddings from 'styles/Paddings.styled';
import Container from 'styles/Container.styled';

const Navbar = () => {
    return (
        <Header>
            <Paddings>
                <Container header>

                    <Content>
                        <Title>
                            <NavLink to={PagesPath.Home}>{pageTitle}</NavLink>
                        </Title>

                        <Navigation>
                            {navigationItems.map(item =>
                                <NavLink
                                    to={item.path}
                                    key={item.label}
                                >
                                    {item.label}
                                </NavLink>
                            )}
                        </Navigation>
                    </Content>

                </Container>
            </Paddings>
        </Header>
    );
};

export default Navbar;