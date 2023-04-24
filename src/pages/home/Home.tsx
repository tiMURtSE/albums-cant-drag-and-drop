import { useEffect, useState } from 'react';
import Paddings from 'styles/components/Paddings.styled';
import Container from 'styles/components/Container.styled';
import Wrapper from 'styles/components/Wrapper.styled';
import Navbar from 'components/Navbar/Navbar';
import TopAlbumList from './components/TopAlbumList/TopAlbumList';

type Props = {};

const Home = (props: Props) => {
    const [mockAlbum, setMockAlbum] = useState({});

    const getInfo = async () => {
        const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=289c3b8ad41598ad070dfbd7046013e7&artist=Cher&album=Believe&format=json');

        const info = await response.json();

        setMockAlbum(info);
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <>
            <Navbar />

            <Paddings>
                <Container>
                    <Wrapper>

                        <TopAlbumList mockAlbum={mockAlbum} />

                    </Wrapper>
                </Container>
            </Paddings>
        </>
    );
};

export default Home;