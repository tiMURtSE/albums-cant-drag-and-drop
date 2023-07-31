import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonAlbumView from "components/CommonAlbumView/CommonAlbumView";
import NoContentPlaceholder from "components/NoContentPlaceholder/NoContentPlaceholder";
import searchAlbums from "services/api/searchAlbums.api";
import FlexColumn from "styles/components/FlexColumn.styled";
import { Loader } from "styles/components/Loader.styled";
import { IAlbum } from "types";
import { formatAlbums } from "utils/formatAlbums";
import { Title } from "./Search.styled";
import Pagination from "./components/Pagination";

const Search = () => {
	const [foundAlbums, setFoundAlbums] = useState<IAlbum[] | []>([]);
	const [page, setPage] = useState(1);
	const [total, setTotal] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const { query } = useParams();

	const getFoundAlbums = async (newPage?: number) => {
		if (!query) return;

		try {
			setIsLoading(true);

			const response = await searchAlbums(query, newPage ? newPage : 1);
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
		setPage(1);
		getFoundAlbums();
	}, [query]);

	return (
		<FlexColumn gap="1rem">
			<Title>
				Результаты поиска для: <span>{query}</span>
			</Title>

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
					<FlexColumn gap="1rem">
						{foundAlbums.length ? (
							foundAlbums.map((album) => (
								<CommonAlbumView
									album={album}
									key={album.id}
								/>
							))
						) : (
							<NoContentPlaceholder
								isLargeSize
								isSearchPage
							/>
						)}
					</FlexColumn>

					{!!foundAlbums.length && (
						<Pagination
							page={page}
							setPage={setPage}
							total={total}
							getFoundAlbums={getFoundAlbums}
						/>
					)}
				</>
			)}
		</FlexColumn>
	);
};

export default Search;
