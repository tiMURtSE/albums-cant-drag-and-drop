import { NavLink } from 'react-router-dom';
import Paddings from 'styles/Paddings.styled';
import { Content, Header, Navigation, Title } from './Navbar.styled';
import Container from 'styles/Container.styled';

const navigationItems = [
    { path: '/', label: 'Главная' },
    { path: '/list', label: 'Альбомы' },
];

const Navbar = () => {
    return (
        <Header>
            <Paddings>
                <Container header>

                    <Content>
                        <Title>
                            <NavLink to='/'>BORINGAHHMUSIC</NavLink>
                        </Title>

                        <Navigation>
                            {navigationItems.map(item =>
                                <NavLink to={item.path}>{item.label}</NavLink>
                            )}
                        </Navigation>
                    </Content>

                </Container>
            </Paddings>
        </Header>
    );
};

export default Navbar;