import Paddings from 'styles/Paddings.styled';
import Container from 'styles/Container.styled';
import Wrapper from 'styles/Wrapper.styled';
import { useEffect, useState } from 'react';
import AlbumList from 'components/albums/albumList/AlbumList';
import Navbar from 'components/navigation/Navbar';

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
                <Container mt='218px'>
                    <Wrapper>

                        <AlbumList mockAlbum={mockAlbum} />

                    </Wrapper>
                </Container>
            </Paddings>
        </>
    );
};

export default Home;