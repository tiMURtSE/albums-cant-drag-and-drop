import AlbumWrapper from "styles/components/AlbumWrapper.styled";
import FlexBetween from "styles/components/FlexBetween.styled";
import Image from "styles/components/Image.styled";
import { Like, Info } from "./CommonAlbumView.styled";
import { Album } from "types";

type Props = {
    album: Album,
};

const CommonAlbumView = ({ album }: Props) => {
    return (
        <AlbumWrapper>
            <FlexBetween>
                <FlexBetween gap="2rem">
                    <Image>
                        <a href="#">
                            <img
                                src={album.image}
                                width='80' height='80'
                                alt={`${album.title} by ${album.artist}`} 
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