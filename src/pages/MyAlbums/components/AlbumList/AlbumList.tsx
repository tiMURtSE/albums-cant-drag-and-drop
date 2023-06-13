import { SortTypes } from "consts";
import { DragAndDrop, IAlbum, Sort } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem, CaptionSortButton } from "./AlbumList.styled";
import { getTypeOfSort } from "utils/getTypeOfSort";

type Props = {
	dragAndDropHandlers: DragAndDrop;
	albums: IAlbum[];
	sort: Sort;
	setSort: React.Dispatch<React.SetStateAction<Sort>>;
};

function AlbumList({ dragAndDropHandlers, albums, sort, setSort }: Props) {
	const isDragging = Boolean(dragAndDropHandlers);

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
				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort(sort, "year")}
						onClick={() => handleSortClick("year")}
						isDragging={isDragging}
					>
						Год
					</CaptionSortButton>
				</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort(sort, "createdAt")}
						onClick={() => handleSortClick("createdAt")}
						isDragging={isDragging}
					>
						Дата добавления
					</CaptionSortButton>
				</CaptionItem>
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
		</div>
	);
}

export default AlbumList;
