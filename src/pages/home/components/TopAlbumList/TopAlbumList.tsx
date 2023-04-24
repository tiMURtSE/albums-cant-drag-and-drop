import TopAlbumItem from "../TopAlbumItem/TopAlbumItem";
import List from "./TopAlbumList.styled";

// type Props = {
//     mockAlbum: object,
// };

const TopAlbumList = ({ mockAlbum }: any) => {
    return (
        <List>
            <TopAlbumItem mockAlbum={mockAlbum} />
            <TopAlbumItem mockAlbum={mockAlbum} />
            <TopAlbumItem mockAlbum={mockAlbum} />
            <TopAlbumItem mockAlbum={mockAlbum} />
        </List>
    );
};

export default TopAlbumList;