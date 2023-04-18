import { NavLink } from 'react-router-dom';

import Paddings from '../../../styles/Paddings.styled';
import { Content, Header, Navigation, Title } from './Navbar.styled';
import FlexBetween from '../../../styles/FlexBetween.styled';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <Header>
            <Paddings>
                <FlexBetween margin='0 auto' gap='2rem'>
                    <Title>
                        BORINGAHHMUSIC
                    </Title>

                    <Content>
                        <Navigation>
                            <NavLink to='/'>Главная</NavLink>
                            <NavLink to='/list'>Альбомы</NavLink>
                        </Navigation>
                        
                        <span>Theme</span>
                    </Content>
                </FlexBetween>
            </Paddings>
        </Header>
    );
};

export default Navbar;