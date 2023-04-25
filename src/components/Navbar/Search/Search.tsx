import { useState } from "react";
import { Content } from "./Search.styled";
import { API_KEY, API_URL } from "api";

type Props = {};
type Search = (album: string, limit?: string, page?: string) => void;
type Album = Array<{ title: string, artist: string, image: string }>
const Search = (props: Props) => {
    // const albums = ['Moscow', 'New-York', 'Tokyo', 'New-Jersey'];
    const [search, setSearch] = useState('');
    const [albums, setAlbums] = useState<Album>([]);
    
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
                cover: image.at(-1)['#text'],
            }
        });

        return albums;
    };
    console.log(albums)

    return (
        <Content>
            <form>
                <input
                    type='text'
                    value={search}
                    onChange={(event) => {
                        setSearch(event.target.value);
                        if (event.target.value) searchAlbum(event.target.value);
                    }}
                />
            </form>

            {search && 
                <div>
                    <ul>
                        {albums
                            .filter(album => album.title.toLowerCase().includes(search.toLowerCase()))
                            .map(album =>
                                <li key={album.title}>
                                    <a href="#">{album.title}</a>
                                </li>
                            )}
                    </ul>
                </div>
            }
        </Content>
    );
};

export default Search;