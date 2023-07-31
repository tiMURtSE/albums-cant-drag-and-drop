import { albumsSelector } from "store/selectors/albumsSelector";
import { useAppSelector } from "hooks";
import { useMediaQuery } from "hooks/useMediaQuery";
import NoContentPlaceholder from "components/NoContentPlaceholder/NoContentPlaceholder";
import { SortableColumns } from "consts";
import { theme } from "theme/theme";
import { DragAndDrop, IAlbum, Sort } from "types";
import { getTypeOfSort } from "utils/getTypeOfSort";
import { updateSortSettings } from "utils/updateSortSettings";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem, CaptionSortButton } from "./AlbumList.styled";

type Props = {
	dragAndDropHandlers: DragAndDrop;
	albums: IAlbum[];
	sort: Sort;
	setSort: React.Dispatch<React.SetStateAction<Sort>>;
};

function AlbumList({ dragAndDropHandlers, albums, sort, setSort }: Props) {
	const albumsFromStore = useAppSelector(albumsSelector);
	const isDragging = Boolean(dragAndDropHandlers);
	const largeScreenSize = theme.media.extraLarge;
	const mediumScreenSize = theme.media.medium;
	const isBelowLargeScreens = useMediaQuery(largeScreenSize);
	const isBelowMediumScreens = useMediaQuery(mediumScreenSize);

	const handleSortClick = (column: SortableColumns) => {
		if (isDragging) return;

		const newSort = updateSortSettings(sort, column);

		setSort(newSort);
	};

	return (
		<div>
			<Caption>
				<CaptionItem>№</CaptionItem>

				<CaptionItem>Обложка</CaptionItem>

				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort(sort, SortableColumns.Title)}
						onClick={() => handleSortClick(SortableColumns.Title)}
						isDragging={isDragging}
					>
						Что и кем
					</CaptionSortButton>
				</CaptionItem>

				{!isBelowMediumScreens && (
					<CaptionItem>
						<CaptionSortButton
							sortType={getTypeOfSort(sort, SortableColumns.Year)}
							onClick={() => handleSortClick(SortableColumns.Year)}
							isDragging={isDragging}
						>
							Год
						</CaptionSortButton>
					</CaptionItem>
				)}

				{!isBelowLargeScreens && (
					<CaptionItem>
						<CaptionSortButton
							sortType={getTypeOfSort(sort, SortableColumns.CreatedAt)}
							onClick={() => handleSortClick(SortableColumns.CreatedAt)}
							isDragging={isDragging}
						>
							Дата добавления
						</CaptionSortButton>
					</CaptionItem>
				)}
			</Caption>

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
		</div>
	);
}

export default AlbumList;
