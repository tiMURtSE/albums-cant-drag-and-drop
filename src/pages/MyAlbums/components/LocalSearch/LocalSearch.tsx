import { ChangeEvent, useState } from "react";
import { useAppSelector } from "hooks";
import { IAlbum } from "types";
import { Input } from "./LocalSearch.styled";

type Props = {
	setModifiedAlbums: React.Dispatch<React.SetStateAction<IAlbum[]>>;
};

const LocalSearch = ({ setModifiedAlbums }: Props) => {
	const albums = useAppSelector((state) => state.albums.albums);
	const [search, setSearch] = useState("");

	const searchAlbums = (event: ChangeEvent<HTMLInputElement>) => {
		const modifiedAlbums = albums.filter((album) => {
			const formattedTitle = album.title.toLowerCase();
			const formattedValue = event.target.value.toLowerCase();

			return formattedTitle.includes(formattedValue);
		});

		setSearch(event.target.value);
		setModifiedAlbums(modifiedAlbums);
	};

	return (
		<div>
			<Input value={search} onChange={searchAlbums} placeholder="Поиск..." />
		</div>
	);
};

export default LocalSearch;
