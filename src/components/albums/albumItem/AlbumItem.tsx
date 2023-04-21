import { Content, Image, Info, Title } from "./AlbumItem.styled";

// type Props = {
//     mockAlbum: object,
// };

const AlbumItem = ({ mockAlbum }: any) => {

    if (!mockAlbum.album) return null;

    const image = mockAlbum.album.image[4]['#text'];
    const title = mockAlbum.album.name;
    const artist = mockAlbum.album.artist;
    const year = mockAlbum.album.tags.tag[3].name;

    return (
        <Content>
            
            <Image>
                <img src={image} alt="" />
            </Image>

            <Info>
                <Title>The Dark Side of the Moon</Title>
                <hr />
                <div>
                    <span>{artist}</span>
                    <span>{year}</span>
                </div>
            </Info>
        </Content>
    );
};

export default AlbumItem;