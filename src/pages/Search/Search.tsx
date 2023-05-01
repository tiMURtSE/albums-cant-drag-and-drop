import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Navbar from "components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import Wrapper from "styles/components/Wrapper.styled";
import { Subtitle, Title } from "./Search.styled";
import search from "api/services/search.api";

type Props = {};
type Search = (album: string, limit?: string, page?: string) => void;
type Albums = Array<{ title: string, artist: string, image: string }>

const Search = (props: Props) => {
    const [albums, setAlbums] = useState<Albums>([]);
    const { state } = useLocation();
    const [query, setQuery] = useState(state);
    const [myAlbums, setMyAlbums] = useState<Albums>([]);

    const searchAlbums = async (query: any) => {
        console.log(query)
        const albums = await search(query);

        console.log(albums);
    };

    useEffect(() => {
        if (query) searchAlbums(query);
    }, []);
    
    return (
        <>
            <Navbar />

            <Paddings>
                <Container>
                    <Title>Результаты поиска для: <span>{query}</span></Title>

                    <Wrapper>
                        {(myAlbums.length !== 0) && <Subtitle>Мои альбомы</Subtitle>}

                        <Subtitle>Результаты</Subtitle>

                        {albums.map(album =>
                            <CommonAlbumView album={album} key={album.title + album.artist} />
                        )}
                    </Wrapper>
                </Container>
            </Paddings>

        </>
    );
};

export default Search;