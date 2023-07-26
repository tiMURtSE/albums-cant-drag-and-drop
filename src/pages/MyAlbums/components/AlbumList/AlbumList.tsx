import { useMediaQuery } from "hooks/useMediaQuery";
import NoContentPlaceholder from "components/NoContentPlaceholder/NoContentPlaceholder";
import { SortTypes } from "consts";
import { theme } from "theme/theme";
import { DragAndDrop, IAlbum, Sort } from "types";
import { getTypeOfSort } from "utils/getTypeOfSort";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem, CaptionSortButton } from "./AlbumList.styled";

type Props = {
	dragAndDropHandlers: DragAndDrop;
	albums: IAlbum[];
	sort: Sort;
	setSort: React.Dispatch<React.SetStateAction<Sort>>;
};

function AlbumList({ dragAndDropHandlers, albums, sort, setSort }: Props) {
	const isDragging = Boolean(dragAndDropHandlers);
	const largeScreenSize = theme.media.extraLarge;
	const mediumScreenSize = theme.media.medium;
	const isBelowLargeScreens = useMediaQuery(largeScreenSize);
	const isBelowMediumScreens = useMediaQuery(mediumScreenSize);

	const handleSortClick = (column: keyof IAlbum) => {
		if (isDragging) return;

		const isPreviousColumnSorting = sort.sortingColumn === column;
		let newType: Sort["typeOfSort"];
		let newColumn: keyof IAlbum | "" = column;

		if (isPreviousColumnSorting) {
			if (sort.typeOfSort === SortTypes.Ascending) {
				newType = SortTypes.Descending;
			} else {
				newType = "";
				newColumn = "";
			}
		} else {
			newType = SortTypes.Ascending;
		}

		const newSort = { sortingColumn: newColumn, typeOfSort: newType };

		setSort(newSort);
	};

	return (
		<div>
			<Caption>
				<CaptionItem>№</CaptionItem>

				<CaptionItem>Обложка</CaptionItem>

				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort(sort, "title")}
						onClick={() => handleSortClick("title")}
						isDragging={isDragging}
					>
						Что и кем
					</CaptionSortButton>
				</CaptionItem>

				{isBelowMediumScreens || (
					<CaptionItem>
						<CaptionSortButton
							sortType={getTypeOfSort(sort, "year")}
							onClick={() => handleSortClick("year")}
							isDragging={isDragging}
						>
							Год
						</CaptionSortButton>
					</CaptionItem>
				)}

				{isBelowLargeScreens || (
					<CaptionItem>
						<CaptionSortButton
							sortType={getTypeOfSort(sort, "createdAt")}
							onClick={() => handleSortClick("createdAt")}
							isDragging={isDragging}
						>
							Дата добавления
						</CaptionSortButton>
					</CaptionItem>
				)}
			</Caption>

			<ul>
				{albums.map((album) => (
					<AlbumItem
						album={album}
						key={album.id}
						dragAndDropHandlers={dragAndDropHandlers}
					/>
				))}
			</ul>

			{!albums.length && <NoContentPlaceholder />}
		</div>
	);
}

export default AlbumList;
