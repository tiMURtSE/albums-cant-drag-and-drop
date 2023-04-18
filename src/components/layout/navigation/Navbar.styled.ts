import styled from 'styled-components';

const Header = styled.header`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;

    width: 100%;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 64px;
`;

const Title = styled.div``;

const Navigation = styled.nav`
    display: flex;
    gap: 2rem;
    
`;

export {
    Header,
    Content,
    Title,
    Navigation,
};