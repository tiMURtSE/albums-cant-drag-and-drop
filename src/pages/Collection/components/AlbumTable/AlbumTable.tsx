import { albumsSelector } from "store/selectors/albumsSelector";
import { useAppSelector } from "hooks";
import { useMediaQuery } from "hooks/useMediaQuery";
import NoContentPlaceholder from "components/NoContentPlaceholder/NoContentPlaceholder";
import { SortableColumns } from "consts/sorting";
import { theme } from "theme/theme";
import { DragAndDrop, IAlbum, Sorting } from "types";
import { getTypeOfSorting } from "utils/getTypeOfSorting";
import { updateSortSettings } from "utils/updateSortingSettings";
import AlbumItem from "../AlbumItem/AlbumItem";
import * as Styled from "./AlbumTable.styled";
import TableHeader from "./TableHeader/TableHeader";

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
		<Styled.Table>
			<TableHeader
				sorting={sorting}
				setSorting={setSorting}
				isDragging={isDragging}
			/>

			{albumsFromStore.length ? (
				<tbody>
					{albums.map((album) => (
						<AlbumItem
							album={album}
							key={album.id}
							dragAndDropHandlers={dragAndDropHandlers}
						/>
					))}
				</tbody>
			) : (
				<NoContentPlaceholder />
			)}
		</Styled.Table>
	);
}

export default AlbumTable;
