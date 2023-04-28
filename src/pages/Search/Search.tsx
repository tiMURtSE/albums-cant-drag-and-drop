import { API_KEY, API_URL } from "api";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Navbar from "components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import Wrapper from "styles/components/Wrapper.styled";

type Props = {};
type Search = (album: string, limit?: string, page?: string) => void;
type Albums = Array<{ title: string, artist: string, image: string }>

const Search = (props: Props) => {
    const [albums, setAlbums] = useState<Albums>([]);
    const { state } = useLocation();
    const [query, setQuery] = useState(state);
    // const [mockAlbum, setMockAlbum] = useState([]);

    const searchAlbum: Search = async (album, limit = '5', page = '1') => {
        const params = new URLSearchParams({
            method: 'album.search',
            album,
            api_key: API_KEY,
            format: 'json',
            limit,
            page,
        }).toString();

        const response = await fetch(API_URL + '?' + params);
    
        let albums = await response.json();

        albums = formatResponse(albums);
        setAlbums(albums);
    };

    const formatResponse = (response: any): Array<object> => {
        let albums = response.results.albummatches.album;

        albums = albums.map(({ name, artist, image }: any) => {
            return {
                title: name,
                artist,
                image: image.at(-1)['#text'],
            }
        });

        return albums;
    };

    useEffect(() => {
        // if (query) searchAlbum(query);
    }, []);
    
    // const getInfo = async () => {
    //     const response = await fetch('http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=289c3b8ad41598ad070dfbd7046013e7&artist=Cher&album=Believe&format=json');

    //     const info = await response.json();

    //     setMockAlbum(info);
    // };

    // useEffect(() => {
    //     getInfo();
    // }, []);

    return (
        <>
            <Navbar />

            <Paddings>
                <Container>
                    <h1>Результаты поиска для: {query}</h1>
                    <Wrapper>
                        <h2>Мои альбомы</h2>

                        <h2>Результаты</h2>
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