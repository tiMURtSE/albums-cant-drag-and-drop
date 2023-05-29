import { SortTypes } from "consts";
import { IAlbum, IModifiers, Sort } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem, CaptionSortButton } from "./AlbumList.styled";

type Props = {
	customizedAlbumList: IAlbum[];
	sort: Sort;
	setSort: React.Dispatch<React.SetStateAction<Sort>>;
};

function AlbumList({ customizedAlbumList, sort, setSort }: Props) {
	const handleSortClick = (column: keyof IAlbum) => {
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

	const getTypeOfSort = (sortingColumn: keyof IAlbum) => {
		if (sortingColumn === sort.sortingColumn) {
			return sort.typeOfSort;
		}
	};

	return (
		<div>
			<Caption>
				<CaptionItem>Обложка</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort("title")}
						onClick={() => handleSortClick("title")}
					>
						Что и кем
					</CaptionSortButton>
				</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort("year")}
						onClick={() => handleSortClick("year")}
					>
						Год
					</CaptionSortButton>
				</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort("createdAt")}
						onClick={() => handleSortClick("createdAt")}
					>
						Дата добавления
					</CaptionSortButton>
				</CaptionItem>
			</Caption>

			<ul>
				{customizedAlbumList.map((album) => (
					<AlbumItem album={album} key={album.id} />
				))}
			</ul>
		</div>
	);
}

export default AlbumList;
