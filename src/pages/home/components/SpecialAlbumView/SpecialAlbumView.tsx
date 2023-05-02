import Image from "styles/components/Image.styled";
import { 
    Artist, 
    ArtistAndYear, 
    Content, 
    Info, 
    Title, 
    Year 
} from "./SpecialAlbumView.styled";
import { Album } from "types";

type Props = {
    // album: Album,
    album: any,
};

const SpecialAlbumView = ({ album }: Props) => {

    if (!album.album) return null;

    const image = album.album.image[4]['#text'];
    const title = album.album.name;
    const artist = album.album.artist;
    const year = album.album.tags.tag[3].name;
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

export default SpecialAlbumView;