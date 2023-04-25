import { NavLink } from 'react-router-dom';
import { PagesPath } from 'types';
import { navigationItems, pageTitle } from 'utils/consts';
import { Content, Header, Navigation, Title } from './Navbar.styled';
import Paddings from 'styles/components/Paddings.styled';
import Container from 'styles/components/Container.styled';
import { useState } from 'react';
import Search from './Search/Search';

const Navbar = () => {

    return (
        <Header>
            <Paddings>
                <Container header>

                    <Content>
                        <Title>
                            <NavLink to={PagesPath.Home}>{pageTitle}</NavLink>
                        </Title>

                        <Search />                        

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