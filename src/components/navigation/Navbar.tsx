import { NavLink } from 'react-router-dom';
import Paddings from 'styles/Paddings.styled';
import { Content, Header, Navigation, Title } from './Navbar.styled';
import Container from 'styles/Container.styled';

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
                            <NavLink to='/'>Главная</NavLink>
                            <NavLink to='/list'>Альбомы</NavLink>
                        </Navigation>
                    </Content>

                </Container>
            </Paddings>
        </Header>
    );
};

export default Navbar;