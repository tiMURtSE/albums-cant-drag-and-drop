import { albumsSelector } from "store/selectors/albumsSelector";
import { useAppSelector } from "hooks";
import NoContentPlaceholder from "components/NoContentPlaceholder/NoContentPlaceholder";
import { DragAndDrop, IAlbum, Sorting } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
// import * as Styled from "./AlbumList.styled";
import Headers from "./Headers/Headers";

type Props = {
	albums: IAlbum[];
	dragAndDropHandlers: DragAndDrop;
	sorting: Sorting;
	setSorting: React.Dispatch<React.SetStateAction<Sorting>>;
};

function AlbumTable({ albums, dragAndDropHandlers, sorting, setSorting }: Props) {
	const albumsFromStore = useAppSelector(albumsSelector);
	const isDragging = Boolean(dragAndDropHandlers);

	return (
		<>
			<Headers
				sorting={sorting}
				setSorting={setSorting}
				isDragging={isDragging}
			/>

			{albumsFromStore.length ? (
				<ul>
					{albums.map((album) => (
						<AlbumItem
							album={album}
							key={album.id}
							dragAndDropHandlers={dragAndDropHandlers}
						/>
					))}
				</ul>
			) : (
				<NoContentPlaceholder />
			)}
		</>
	);
}

export default AlbumTable;
