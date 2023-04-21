import AlbumItem from "../albumItem/AlbumItem";
import List from "./AlbumList.styled";

// type Props = {
//     mockAlbum: object,
// };

const AlbumList = ({ mockAlbum }: any) => {
    return (
        <List>
            <AlbumItem mockAlbum={mockAlbum}/>
            <AlbumItem mockAlbum={mockAlbum}/>
            <AlbumItem mockAlbum={mockAlbum}/>
            <AlbumItem mockAlbum={mockAlbum}/>
        </List>
    );
};

export default AlbumList;