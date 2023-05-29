import { SortingTypes } from "consts";
import { IAlbum, IModifiers } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem } from "./AlbumList.styled";

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
	const handleSortClick = (column: keyof IAlbum) => {
		const isPreviousColumnSorting = modifiers.sort.column === column;
		let nextSortingType: IModifiers["sort"]["type"];
		let nextSortingColumn: keyof IAlbum | "" = column;

		if (isPreviousColumnSorting) {
			if (modifiers.sort.type === SortingTypes.Ascending) {
				nextSortingType = SortingTypes.Descending;
			} else {
				nextSortingType = "";
				nextSortingColumn = "";
			}
		} else {
			nextSortingType = SortingTypes.Ascending;
		}

		setModifiers({ ...modifiers, sort: { column: nextSortingColumn, type: nextSortingType } });
	};

	const srt = (sortState: keyof IAlbum) => {
		if (sortState === modifiers.sort.column) {
			return modifiers.sort.type;
		}
	};

	return (
		<div>
			<Caption>
				<CaptionItem>Обложка</CaptionItem>
				<CaptionItem
					sortState={srt("title")}
					data-column={"title"}
					onClick={() => handleSortClick("title")}
				>
					Что и кем
				</CaptionItem>
				<CaptionItem
					sortState={srt("year")}
					data-column={"year"}
					onClick={() => handleSortClick("year")}
				>
					Год
				</CaptionItem>
				<CaptionItem
					sortState={srt("createdAt")}
					data-column={"createdAt"}
					onClick={() => handleSortClick("createdAt")}
				>
					Дата добавления
				</CaptionItem>
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
