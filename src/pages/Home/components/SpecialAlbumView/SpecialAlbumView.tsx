import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "hooks/useMediaQuery";
import StylishAlbumTitle from "styles/components/StylishAlbumTitle.styled";
import { theme } from "theme/theme";
import { IAlbum } from "types";
import { adjustAlbumTitleFontSize } from "utils/adjustAlbumTitleFontSize";
import { ReactComponent as CrownIcon } from "assets/icons/crown.svg";
import {
	AlbumCoverWrapper,
	Artist,
	ArtistAndYear,
	Content,
	CrownIconWrapper,
	Description,
	TitleWrapper,
	Year,
} from "./SpecialAlbumView.styled";

type Props = {
	album: IAlbum;
};

const SpecialAlbumView = ({ album }: Props) => {
	const AlbumTitleRef = useRef<HTMLHeadingElement>(null);
	const smallScreenSize = theme.media.small;
	const isBelowSmallScreenSize = useMediaQuery(smallScreenSize);

	if (!Object.keys(album).length) return null;

	useEffect(() => {
		if (isBelowSmallScreenSize) {
			adjustAlbumTitleFontSize(AlbumTitleRef);
		}
	}, []);

	return (
		<Content position={album.position}>
			{album.position <= 3 && (
				<CrownIconWrapper position={album.position}>
					<CrownIcon />
				</CrownIconWrapper>
			)}

			<Link to={`/album/${album.id}`}>
				<AlbumCoverWrapper>
					<img
						src={album.images[1].url}
						alt={`${album.title} by ${album.artist}`}
					/>
				</AlbumCoverWrapper>
			</Link>

			<Description>
				<TitleWrapper>
					<StylishAlbumTitle
						isExtraLarge
						ref={AlbumTitleRef}
					>
						<Link to={`/album/${album.id}`}>{album.title}</Link>
					</StylishAlbumTitle>
				</TitleWrapper>

				<ArtistAndYear>
					<Artist>{album.artist}</Artist>
					<Year>{album.year}</Year>
				</ArtistAndYear>
			</Description>
		</Content>
	);
};

export default SpecialAlbumView;
