import { useParams } from "react-router-dom";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import Wrapper from "styles/components/Wrapper.styled";
import { Title } from "./Search.styled";
import { Loader } from "styles/components/Loader.styled";
import { IAlbum } from "types";
import { useEffect, useState } from "react";
import searchAlbums from "services/api/searchAlbums.api";
import { formatAlbums } from "utils/formatAlbums";
import Pagination from "./components/Pagination";

const Search = () => {
	const [foundAlbums, setFoundAlbums] = useState<IAlbum[] | []>([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const { query } = useParams();

	const getFoundAlbums = async () => {
		if (!query) return;

		try {
			setIsLoading(true);
			const response = await searchAlbums(query, page);

			const albums = response.albums.items as IAlbum[];
			const total = response.albums.total as number;

			setIsLoading(false);
			setFoundAlbums(formatAlbums(albums));
			setTotal(total);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getFoundAlbums();
	}, [query, page]);

	return (
		<>
			<Title>
				Результаты поиска для: <span>{query}</span>
			</Title>

			<Wrapper>
				{isLoading ? (
					<Loader
						width="100%"
						height="40vh"
						contentHeight="100px"
						contentWidth="100px"
						border="10px"
					/>
				) : (
					<>
						{foundAlbums.map((album) => (
							<CommonAlbumView album={album} key={album.id} />
						))}

						{!!foundAlbums.length && (
							<Pagination page={page} setPage={setPage} total={total} />
						)}
					</>
				)}
			</Wrapper>
		</>
	);
};

export default Search;
