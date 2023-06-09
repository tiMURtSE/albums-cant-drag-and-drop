import { Link } from "react-router-dom";
import { IAlbum } from "types";
import formatDate from "utils/formatDate";
import Image from "components/Image/Image";
import { Artist, CoverWrapper, CreatedAt, Item, Names, Title, Year } from "./AlbumItem.styled";
import ContextMenu from "../ContextMenu/ContextMenu";
import { useState } from "react";

type Props = {
	album: IAlbum;
	key: string;
	draggableId: string;
	setDraggableId: React.Dispatch<React.SetStateAction<string>>;
};

const AlbumItem = ({ album, draggableId, setDraggableId }: Props) => {
	const [isDragStarted, setIsDragStarted] = useState(false);

	const onDragStart = (e: any) => {
		setIsDragStarted(true);
	};

	const onDragEnd = (e: any) => {
		setIsDragStarted(false);
	};

	const onDragEnter = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const onDragLeave = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const onDragOver = (e: any) => {
		e.preventDefault();
		e.stopPropagation();

		if (e.target.draggable && e.target.tagName !== "A") {
			setDraggableId(album.id);
		}
	};
	const onDrop = (e: any) => {
		e.preventDefault();
		e.stopPropagation();

		setDraggableId("");
	};

	const dnd = {
		onDragStart,
		onDragEnd,
		onDragEnter,
		onDragLeave,
		onDragOver,
		onDrop,
	};

	return (
		<Item
			draggable
			{...dnd}
			isDragStarted={isDragStarted}
			id={album.id}
			isDragOver={album.id === draggableId}
		>
			<CoverWrapper>
				<div>
					<Link to={`/album/${album.id}`}>
						<Image
							src={album.image}
							width="80px"
							height="80px"
							alt={`${album.title} by ${album.artist}`}
						/>
					</Link>
				</div>
			</CoverWrapper>

			<Names>
				<Title>
					<Link to={`/album/${album.id}`}>{album.title}</Link>
				</Title>

				<Artist>{album.artist}</Artist>
			</Names>

			<Year>{album.year}</Year>

			<CreatedAt>
				<span>{formatDate(album.createdAt)}</span>
			</CreatedAt>

			<ContextMenu album={album} />
		</Item>
	);
};

export default AlbumItem;
