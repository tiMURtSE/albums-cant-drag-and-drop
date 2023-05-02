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
    album: Album,
    key: string,
};

const SpecialAlbumView = ({ album }: Props) => {

    if (!album.id) return null;

    return (
        <Content place={1}>
            
            <Image>
                <img
                    src={album.image}
                    width='200' height='200'
                    alt={`${album.title} by ${album.artist}`} 
                />
            </Image>

            <Info>
                <Title>{album.title}</Title>

                <ArtistAndYear>
                    <Artist>{album.artist}</Artist>
                    <Year>{album.year}</Year>
                </ArtistAndYear>
            </Info>
        </Content>
    );
};

export default SpecialAlbumView;