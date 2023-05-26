import { SortingTypes } from "consts";
import { IAlbum, IModifiers } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem } from "./AlbumList.styled";

type Props = {
	modifiedAlbums: IAlbum[];
	modifiers: IModifiers;
	setModifiers: React.Dispatch<React.SetStateAction<IModifiers>>;
};

const AlbumList = ({ modifiedAlbums, modifiers, setModifiers }: Props) => {
	const handleSortClick = (column: keyof IAlbum) => {
		const isPreviousColumnSorting = modifiers.sort.column === column;

		if (isPreviousColumnSorting) {
			if (modifiers.sort.type === SortingTypes.Ascending) {
				setModifiers({ ...modifiers, sort: { column, type: SortingTypes.Descending } });
			} else if (modifiers.sort.type === SortingTypes.Descending) {
				setModifiers({ ...modifiers, sort: { column: "", type: "" } });
			}
		} else {
			setModifiers({ ...modifiers, sort: { column, type: SortingTypes.Ascending } });
		}
	};

	return (
		<div>
			<Caption>
				<CaptionItem>Обложка</CaptionItem>
				<CaptionItem onClick={() => handleSortClick("title")}>Что и кем</CaptionItem>
				<CaptionItem onClick={() => handleSortClick("year")}>Год</CaptionItem>
				<CaptionItem onClick={() => handleSortClick("createdAt")}>
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
