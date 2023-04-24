import { 
    Artist, 
    ArtistAndYear, 
    Content, 
    Image, 
    Info, 
    Title, 
    Year 
} from "./TopAlbumItem.styled";

// type Props = {
//     mockAlbum: object,
// };

const TopAlbumItem = ({ mockAlbum }: any) => {

    if (!mockAlbum.album) return null;

    const image = mockAlbum.album.image[4]['#text'];
    const title = mockAlbum.album.name;
    const artist = mockAlbum.album.artist;
    const year = mockAlbum.album.tags.tag[3].name;
    const place = 1;

    return (
        <Content place={place}>
            
            <Image>
                <img
                    src={image}
                    width='200' height='200'
                    alt={`${title} by ${artist}`} 
                />
            </Image>

            <Info>
                <Title>The Dark Side of the Moon</Title>
                <ArtistAndYear>
                    <Artist>{artist}</Artist>
                    <Year>{year}</Year>
                </ArtistAndYear>
            </Info>
        </Content>
    );
};

export default TopAlbumItem;