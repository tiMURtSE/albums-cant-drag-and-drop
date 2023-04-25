import { useState } from "react";
import { Autocomplete, ClearSign, Content, Input, Item, ItemLink, List } from "./Search.styled";
import { API_KEY, API_URL } from "api";

type Props = {};
type Search = (album: string, limit?: string, page?: string) => void;
type Album = Array<{ title: string, artist: string, image: string }>

const Search = (props: Props) => {
    const albums = [
            {
            "title": "DONDA",
            "artist": "Kanye West",
            "cover": "https://lastfm.freetls.fastly.net/i/u/300x300/32f2b94ebebb2742709006790b9209b9.png"
            },
            {
            "title": "DAMN.",
            "artist": "Kendrick Lamar",
            "cover": "https://lastfm.freetls.fastly.net/i/u/300x300/8a59ed3a9c71cb5113325e2026889e4a.png"
            },
            {
            "title": "Die Lit",
            "artist": "Playboi Carti",
            "cover": "https://lastfm.freetls.fastly.net/i/u/300x300/d1761236c12379d3e1dfce76023231f6.png"
            },
            {
            "title": "D-2",
            "artist": "Agust D",
            "cover": "https://lastfm.freetls.fastly.net/i/u/300x300/2998abc4c73550e78749e21846afa431.png"
            },
            {
            "title": "Discovery",
            "artist": "Daft Punk",
            "cover": "https://lastfm.freetls.fastly.net/i/u/300x300/54010ae7c4fa4c96a1e1872a051d9ecc.png"
            }
    ];
    const [search, setSearch] = useState('');
    // const [albums, setAlbums] = useState<Album>([]);
    
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

        // setAlbums(albums);
    };

    const formatResponse = (response: any): Array<object> => {
        let albums = response.results.albummatches.album;

        albums = albums.map(({ name, artist, image }: any) => {
            return {
                title: name,
                artist,
                cover: image.at(-1)['#text'],
            }
        });

        return albums;
    };

    return (
        <Content>
            <form>
                <Input
                    type='text'
                    value={search}
                    placeholder="Поиск..."
                    onChange={(event) => {
                        setSearch(event.target.value);
                        // if (event.target.value) searchAlbum(event.target.value);
                    }}
                />
            </form>

            {search && 
                <Autocomplete>
                    <List>
                        {albums
                            .filter(album => album.title.toLowerCase().includes(search.toLowerCase()))
                            .length
                         ? albums
                            .filter(album => album.title.toLowerCase().includes(search.toLowerCase()))
                            .map(album =>
                                <Item key={album.title}>
                                    <ItemLink href="#">{album.title}</ItemLink>
                                </Item>
                            )
                        : <span>Нет результатов</span>
                        }
                    </List>
                </Autocomplete>
            }

            <ClearSign
                search={search}
                onClick={() => setSearch('')}
            >
                &#9587;
            </ClearSign>
        </Content>
    );
};

export default Search;