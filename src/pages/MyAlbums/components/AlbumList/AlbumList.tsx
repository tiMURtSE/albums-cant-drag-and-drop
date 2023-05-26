import { SortingTypes } from "consts";
import { IAlbum, IModifiers } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem } from "./AlbumList.styled";
import { useState } from "react";

type Props = {
	modifiedAlbums: IAlbum[];
	modifiers: IModifiers;
	setModifiers: React.Dispatch<React.SetStateAction<IModifiers>>;
};

type CaptionItemType = {
	label: string;
	sortName: keyof IAlbum;
	sortState: SortingTypes | "";
};

const AlbumList = ({ modifiedAlbums, modifiers, setModifiers }: Props) => {
	const [captionItems, setCaptionItems] = useState<CaptionItemType[]>([
		{ label: "Что и кем", sortName: "title", sortState: "" },
		{ label: "Год", sortName: "year", sortState: "" },
		{ label: "Дата добавления", sortName: "createdAt", sortState: "" },
	]);

	const handleSortClick = (column: keyof IAlbum) => {
		const isPreviousColumnSorting = modifiers.sort.column === column;

		if (isPreviousColumnSorting) {
			if (modifiers.sort.type === SortingTypes.Ascending) {
				const updatedCaptionItems = captionItems.map((item) => {
					if (item.sortName === column) {
						return { ...item, sortState: SortingTypes.Descending };
					}

					return item;
				}) as CaptionItemType[];
				setCaptionItems(updatedCaptionItems);
				setModifiers({ ...modifiers, sort: { column, type: SortingTypes.Descending } });
			} else if (modifiers.sort.type === SortingTypes.Descending) {
				const updatedCaptionItems = captionItems.map((item) => {
					if (item.sortName === column) {
						return { ...item, sortState: "" };
					}

					return item;
				}) as CaptionItemType[];
				setCaptionItems(updatedCaptionItems);
				setModifiers({ ...modifiers, sort: { column: "", type: "" } });
			}
		} else {
			const updatedCaptionItems = captionItems.map((item) => {
				if (item.sortName === column) {
					return { ...item, sortState: SortingTypes.Ascending };
				}

				return item;
			}) as CaptionItemType[];
			setCaptionItems(updatedCaptionItems);
			setModifiers({ ...modifiers, sort: { column, type: SortingTypes.Ascending } });
		}
	};

	return (
		<div>
			<Caption>
				<CaptionItem>Обложка</CaptionItem>

				{captionItems.map((item) => (
					<CaptionItem
						onClick={() => handleSortClick(item.sortName)}
						sortState={item.sortState}
						key={item.label}
					>
						{item.label}
					</CaptionItem>
				))}
				{/* <CaptionItem>Обложка</CaptionItem>
				<CaptionItem onClick={() => handleSortClick("title")}>Что и кем</CaptionItem>
				<CaptionItem onClick={() => handleSortClick("year")}>Год</CaptionItem>
				<CaptionItem onClick={() => handleSortClick("createdAt")}>
					Дата добавления
				</CaptionItem> */}
			</Caption>

			<ul>
				{modifiedAlbums.map((album) => (
					<AlbumItem album={album} key={album.id} />
				))}
			</ul>
		</div>
	);
};

export default AlbumList;
