import { useEffect, useState } from 'react';
import Paddings from 'styles/components/Paddings.styled';
import Container from 'styles/components/Container.styled';
import Wrapper from 'styles/components/Wrapper.styled';
import Navbar from 'components/Navbar/Navbar';
import { List } from './Home.styled';
import SpecialAlbumView from './components/SpecialAlbumView/SpecialAlbumView';

const Home = () => {
    const [mockAlbum, setMockAlbum] = useState<any>([]);

    const getInfo = async () => {
        const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=289c3b8ad41598ad070dfbd7046013e7&artist=Cher&album=Believe&format=json');

        const info = await response.json();

        setMockAlbum([info]);
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

                        <List>
                            {mockAlbum.map((album: any) =>
                                <SpecialAlbumView album={album} key={album} />    
                            )}
                            
                        </List>

                    </Wrapper>
                </Container>
            </Paddings>
        </>
    );
};

export default Home;