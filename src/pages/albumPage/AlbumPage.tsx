import Navbar from "components/Navbar/Navbar";
import Container from "styles/components/Container.styled";
import Paddings from "styles/components/Paddings.styled";
import Wrapper from "styles/components/Wrapper.styled";
import { Content, FLexColumn } from "./AlbumPage.styled";
import Image from "styles/components/Image.styled";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { LASTFM_API } from "consts/api";
import formatAdditionalInfo from "utils/formatAdditionalInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import { theme } from "styles/theme/theme";
import getSingleAlbum from "services/api/getSingleAlbum.api";
import formatAlbum from "utils/formatAlbum";

type Props = {};

const AlbumPage = (props: Props) => {
	const [album, setAlbum] = useState<any>({});
	const albums = useSelector((state: any) => state.albums.albums);
	const isAlbumLiked = albums.find((albums: any) => albums.id === album.id);
	const { id } = useParams();

	const getAlbum = async () => {
		let album;

		if (isAlbumLiked) {
			album = albums.find((item: any) => item.id === id);
			return setAlbum(album);
		}

		const response = await getSingleAlbum(id);
		setAlbum(formatAlbum(response));
	};

	useEffect(() => {
		getAlbum();
	}, []);

	if (!album.id) return null;

	return (
		<>
			<Navbar />

			<Paddings>
				<Container
					header
					mt={`calc(${theme.sizes.header.height} + 2rem)`}
				>
					<Wrapper>
						<Content>
							<FLexColumn>
								<Image>
									<img
										src={album.image}
										width={"100%"}
										height={"100%"}
										alt={`${album.title} by ${album.artist}`}
									/>
								</Image>
							</FLexColumn>

							<FLexColumn gap="1rem">
								<AdditionalInfo album={album} />
							</FLexColumn>
						</Content>
					</Wrapper>
				</Container>
			</Paddings>
		</>
	);
};

export default AlbumPage;
