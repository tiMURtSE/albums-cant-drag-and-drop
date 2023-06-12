import { SortTypes } from "consts";
import { IAlbum, Sort } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem, CaptionSortButton } from "./AlbumList.styled";
import { useEffect, useState } from "react";
import { getTypeOfSort } from "utils/getTypeOfSort";
import { useDragAndDrop } from "hooks/useDragAndDrop";
import { sortRearrangedAlbums } from "utils/sortRearrangedAlbums";

type Props = {
	rearrangedAlbums: IAlbum[];
	setRearrangedAlbums: React.Dispatch<React.SetStateAction<IAlbum[]>>;
	isDragging: boolean;
	customizedAlbumList: IAlbum[];
	sort: Sort;
	setSort: React.Dispatch<React.SetStateAction<Sort>>;
};

function AlbumList({
	rearrangedAlbums,
	setRearrangedAlbums,
	isDragging,
	customizedAlbumList,
	sort,
	setSort,
}: Props) {
	const dragAndDropHandlers = useDragAndDrop({ rearrangedAlbums, setRearrangedAlbums });

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

	return (
		<div>
			<Caption>
				<CaptionItem>№</CaptionItem>

				<CaptionItem>Обложка</CaptionItem>

				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort(sort, "title")}
						onClick={() => handleSortClick("title")}
					>
						Что и кем
					</CaptionSortButton>
				</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort(sort, "year")}
						onClick={() => handleSortClick("year")}
					>
						Год
					</CaptionSortButton>
				</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortType={getTypeOfSort(sort, "createdAt")}
						onClick={() => handleSortClick("createdAt")}
					>
						Дата добавления
					</CaptionSortButton>
				</CaptionItem>
			</Caption>

			<ul>
				{isDragging
					? [...rearrangedAlbums]
							.sort(sortRearrangedAlbums)
							.map((album) => (
								<AlbumItem
									album={album}
									key={album.id}
									dragAndDropHandlers={dragAndDropHandlers}
								/>
							))
					: customizedAlbumList.map((album) => (
							<AlbumItem album={album} key={album.id} />
					  ))}
			</ul>
		</div>
	);
}

export default AlbumList;
