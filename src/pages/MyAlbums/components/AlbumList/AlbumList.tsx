import { SortingTypes } from "consts";
import { IAlbum, IModifiers } from "types";
import AlbumItem from "../AlbumItem/AlbumItem";
import { Caption, CaptionItem, CaptionSortButton } from "./AlbumList.styled";

type Props = {
	modifiedAlbums: IAlbum[];
	modifiers: IModifiers;
	setModifiers: React.Dispatch<React.SetStateAction<IModifiers>>;
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

	const setSortingType = (sortState: keyof IAlbum) => {
		if (sortState === modifiers.sort.column) {
			return modifiers.sort.type;
		}
	};

	return (
		<div>
			<Caption>
				<CaptionItem>Обложка</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortState={setSortingType("title")}
						onClick={() => handleSortClick("title")}
					>
						Что и кем
					</CaptionSortButton>
				</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortState={setSortingType("year")}
						onClick={() => handleSortClick("year")}
					>
						Год
					</CaptionSortButton>
				</CaptionItem>
				<CaptionItem>
					<CaptionSortButton
						sortState={setSortingType("createdAt")}
						onClick={() => handleSortClick("createdAt")}
					>
						Дата добавления
					</CaptionSortButton>
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
