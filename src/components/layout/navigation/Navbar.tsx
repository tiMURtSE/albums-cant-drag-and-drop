import { NavLink } from 'react-router-dom';
import Paddings from 'styles/Paddings.styled';
import { Container, Content, Header, Navigation, Title } from './Navbar.styled';

const Navbar = () => {
    return (
        <Header>
            <Paddings>
                <Container>
                    <Title>
                        <NavLink to='/'>BORINGAHHMUSIC</NavLink>
                    </Title>

                    <Content>
                        <Navigation>
                            <NavLink to='/'>Главная</NavLink>
                            <NavLink to='/list'>Альбомы</NavLink>
                        </Navigation>
                        
                        <span>:V</span>
                    </Content>
                </Container>
            </Paddings>
        </Header>
    );
};

export default Navbar;