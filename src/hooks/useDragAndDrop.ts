import { useAppSelector } from "hooks";
import { useState } from "react";
import { IAlbum } from "types";
import { sortRearrangedAlbums } from "utils/sortRearrangedAlbums";

type Params = {
	rearrangedAlbums: IAlbum[];
	setRearrangedAlbums: React.Dispatch<React.SetStateAction<IAlbum[]>>;
};

export const useDragAndDrop = () => {
	const favoriteAlbums = useAppSelector((state) => state.albums.albums);
	const [rearrangedAlbums, setRearrangedAlbums] = useState(favoriteAlbums);
	const [draggingItem, setDraggingItem] = useState<IAlbum | null>(null);

	const onDragStart = (e: any, target: IAlbum) => {
		setDraggingItem(target);
	};

	const onDragEnd = (e: any) => {
		setDraggingItem(null);
	};

	const onDragEnter = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const onDragLeave = (e: any) => {};

	const onDragOver = (e: any) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const onDrop = (e: any, target: IAlbum) => {
		e.preventDefault();
		e.stopPropagation();

		if (!draggingItem) return;

		if (target.position !== draggingItem.position) {
			const updatedAlbums = [] as IAlbum[];
			const newDraggingItemPosition = target.position;
			const isAlbumUp = draggingItem.position > target.position;

			if (isAlbumUp) {
				for (let i = 0; i < rearrangedAlbums.length; i++) {
					const album = rearrangedAlbums[i];

					if (album.id === draggingItem.id) {
						updatedAlbums.push({ ...album, position: newDraggingItemPosition });
						continue;
					}

					if (
						album.position < draggingItem.position &&
						album.position >= target.position
					) {
						updatedAlbums.push({ ...album, position: album.position + 1 });
					} else {
						updatedAlbums.push({ ...album });
					}
				}
			}

			if (!isAlbumUp) {
				for (let i = 0; i < rearrangedAlbums.length; i++) {
					const album = rearrangedAlbums[i];

					if (album.id === draggingItem.id) {
						updatedAlbums.push({ ...album, position: newDraggingItemPosition });
						continue;
					}

					if (
						album.position > draggingItem.position &&
						album.position <= target.position
					) {
						updatedAlbums.push({ ...album, position: album.position - 1 });
					} else {
						updatedAlbums.push({ ...album });
					}
				}
			}

			setRearrangedAlbums(updatedAlbums.sort(sortRearrangedAlbums));
		}
	};

	const dragAndDropHandlers = (album: IAlbum) => {
		return {
			draggable: true,
			onDragStart: (e: any) => onDragStart(e, album),
			onDragEnd,
			onDragEnter,
			onDragLeave,
			onDragOver,
			onDrop: (e: any) => onDrop(e, album),
		};
	};

	return { rearrangedAlbums, dragAndDropHandlers };
};
