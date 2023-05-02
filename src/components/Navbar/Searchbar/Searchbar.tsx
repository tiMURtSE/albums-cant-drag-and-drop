import { useState } from "react";
import { Autocomplete, ClearSign, Content, Input, Item, ItemLink, List } from "./Searchbar.styled";
import { useNavigate } from "react-router-dom";

type Search = (album: string, limit?: string, page?: string) => void;
type Albums = Array<{ title: string, artist: string, image: string }>

const Search = () => {
    const [search, setSearch] = useState('');
    const [albums, setAlbums] = useState<Albums>([]);
    const navigate = useNavigate();

    return (
        <Content>
            <form onSubmit={(event) => { event.preventDefault(); navigate(`/search/${search}`)}}>
                <Input
                    type='search'
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