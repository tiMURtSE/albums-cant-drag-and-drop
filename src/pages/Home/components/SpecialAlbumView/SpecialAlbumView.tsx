import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "hooks/useMediaQuery";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import { theme } from "theme/theme";
import { IAlbum } from "types";
import { adjustAlbumTitleFontSize } from "utils/adjustAlbumTitleFontSize";
import { ReactComponent as CrownIcon } from "assets/icons/crown.svg";
import * as Styled from "./SpecialAlbumView.styled";

type Props = {
	album: IAlbum;
};

const SpecialAlbumView = ({ album }: Props) => {
	const AlbumTitleRef = useRef<HTMLHeadingElement>(null);
	const smallScreenSize = theme.media.small;
	const isBelowSmallScreensSize = useMediaQuery(smallScreenSize);

	useEffect(() => {
		if (isBelowSmallScreensSize) {
			adjustAlbumTitleFontSize(AlbumTitleRef);
		}
	}, []);

	if (!Object.keys(album).length) return null;

	return (
		<Styled.Wrapper position={album.position}>
			{album.position <= 3 && (
				<Styled.CrownIcon position={album.position}>
					<CrownIcon />
				</Styled.CrownIcon>
			)}

			<Link to={`/album/${album.id}`}>
				<Styled.AlbumCover>
					<img
						src={album.images[1].url}
						alt={`${album.title} by ${album.artist}`}
					/>
				</Styled.AlbumCover>
			</Link>

			<Styled.Description>
				<Styled.Title>
					<StylishAlbumTitle
						isExtraLarge
						ref={AlbumTitleRef}
					>
						<Link to={`/album/${album.id}`}>{album.title}</Link>
					</StylishAlbumTitle>
				</Styled.Title>

				<Styled.ArtistAndYear>
					<Styled.Artist>{album.artist}</Styled.Artist>

					<Styled.Year>{album.year}</Styled.Year>
				</Styled.ArtistAndYear>
			</Styled.Description>
		</Styled.Wrapper>
	);
};

export default SpecialAlbumView;
