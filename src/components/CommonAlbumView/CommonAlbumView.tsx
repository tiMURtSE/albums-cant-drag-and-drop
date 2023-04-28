import AlbumWrapper from "styles/components/AlbumWrapper.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import { Like, Info } from "./CommonAlbumView.styled";
import Image from "styles/components/Image.styled";

type Props = {
    album: any,
};

const CommonAlbumView = ({ album }: Props) => {
    // console.log(mockAlbum);

    // if (!mockAlbum.album) return null;
    console.log(album)
    console.log(album.image)
    return (
        <AlbumWrapper>
            <FlexBetween>
                <FlexBetween gap="2rem">
                    <Image>
                        <a href="#">
                            <img
                                src={album.image}
                                width='80' height='80'
                                // alt={`${title} by ${artist}`} 
                            />
                        </a>
                    </Image>

                    <Info>
                        <a href="#">
                            <h3>{album.title}</h3>
                            <p>{album.artist}</p>
                        </a>
                    </Info>
                </FlexBetween>

                <Like>
                    &#128420;
                </Like>
            </FlexBetween>
        </AlbumWrapper>
    );
};

export default CommonAlbumView;