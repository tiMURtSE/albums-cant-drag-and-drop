import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Navbar from "components/Navbar/Navbar";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import Wrapper from "styles/components/Wrapper.styled";
import { Loader, Subtitle, Title } from "./Search.styled";
import { search } from "api";
import { Albums } from "types";
import formatAlbum from "utils/formatAlbum";

const Search = () => {
    const [albums, setAlbums] = useState<Albums>([]);
    const { state: queryValue } = useLocation();
    const [query, _] = useState(queryValue);
    const [myAlbums, setMyAlbums] = useState<Albums>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const isMyAlbumsFound = Boolean(myAlbums.length);

    const searchAlbums = async (query: string) => {
        const searchResults = await search(query);
        const albums = searchResults.albums.items;

        for (let i = 0; i < albums.length; i++) {
            albums[i] = formatAlbum(albums[i]);
        }

        setAlbums(albums);
        setIsLoading(false);
    };

    useEffect(() => {
        if (query && isLoading) searchAlbums(query);
    }, [query]);

    return (
        <>
            <Navbar />

            <Paddings>
                <Container>
                    <Title>Результаты поиска для: <span>{query}</span></Title>
                        <Wrapper>
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <>
                                    {(isMyAlbumsFound) && <Subtitle>Мои альбомы</Subtitle>}

                                    <Subtitle>Результаты</Subtitle>

                                    {albums.map(album =>
                                        <CommonAlbumView album={album} key={album.id} />
                                    )}
                                </>
                            )}
                        </Wrapper>
                </Container>
            </Paddings>

        </>
    );
};

export default Search;