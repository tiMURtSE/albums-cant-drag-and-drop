import { useState } from "react";
import { IAlbum } from "types";

type Params = {
	rearrangedAlbums: IAlbum[];
	setRearrangedAlbums: React.Dispatch<React.SetStateAction<IAlbum[]>>;
};

export const useDragAndDrop = ({ rearrangedAlbums, setRearrangedAlbums }: Params) => {
	const [draggingItem, setDraggingItem] = useState<IAlbum | null>(null);

	const onDragStart = (e: any, target: IAlbum) => {
		setDraggingItem(target);
	};

	const onDragEnd = (e: any) => {
		setDraggingItem(null);
	};

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

			setRearrangedAlbums(updatedAlbums);
		}
	};

	const dragAndDropHandlers = (album: IAlbum) => {
		return {
			draggable: true,
			onDragStart: (e: any) => onDragStart(e, album),
			onDragEnd,
			onDragOver,
			onDrop: (e: any) => onDrop(e, album),
		};
	};

	return dragAndDropHandlers;
};
