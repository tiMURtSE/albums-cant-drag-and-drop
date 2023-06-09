import { SortTypes } from "consts";
import { IAlbum, Sort } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem, CaptionSortButton } from "./AlbumList.styled";
import { useEffect, useState } from "react";
import { getTypeOfSort } from "utils/getTypeOfSort";

type Props = {
	draggedAlbums: IAlbum[];
	setDraggedAlbums: React.Dispatch<React.SetStateAction<IAlbum[]>>;
	customizedAlbumList: IAlbum[];
	sort: Sort;
	setSort: React.Dispatch<React.SetStateAction<Sort>>;
	isDragging: boolean;
};

function AlbumList({
	customizedAlbumList,
	draggedAlbums,
	setDraggedAlbums,
	sort,
	setSort,
	isDragging,
}: Props) {
	const [currentItem, setCurrentItem] = useState<IAlbum | null>(null);

	const currentAlbums = isDragging ? draggedAlbums : customizedAlbumList;

	const onDragStart = (e: any, item: IAlbum) => {
		setCurrentItem(item);
	};

	const onDragEnd = (e: any) => {
		setCurrentItem(null);
	};

	const onDragOver = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const onDrop = (e: any, item: IAlbum) => {
		e.preventDefault();
		e.stopPropagation();

		if (item.position !== currentItem?.position) {
			const updatedAlbums = draggedAlbums.map((album) => {
				if (album.id === item.id) {
					return { ...album, position: currentItem?.position };
				} else if (album.id === currentItem?.id) {
					return { ...album, position: item.position };
				} else {
					return album;
				}
			}) as IAlbum[];

			setDraggedAlbums(updatedAlbums);
		}
	};

	const dnd = (album: IAlbum) => {
		return {
			onDragStart: (e: any) => onDragStart(e, album),
			onDragEnd,
			onDragOver,
			onDrop: (e: any) => onDrop(e, album),
		};
	};

	const sortirovka = (a: IAlbum, b: IAlbum) => {
		if (!isDragging) return 0;

		return a.position - b.position;
	};

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
				{[...currentAlbums].sort(sortirovka).map((album) => {
					return <AlbumItem album={album} key={album.id} dnd={dnd(album)} />;
				})}
			</ul>
		</div>
	);
}

export default AlbumList;
