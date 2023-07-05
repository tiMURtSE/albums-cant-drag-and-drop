import { MouseEvent } from "react";

type EventType = MouseEvent<HTMLDialogElement> | MouseEvent<HTMLDivElement>;

export const closeSideNavbar = (event: EventType, dialogId: string, closeButtonId: string) => {
	const dialog = document.getElementById(dialogId) as HTMLDialogElement;
	const target = event.target as HTMLElement;

	if (dialog === target || target.closest(`#${closeButtonId}`)) {
		dialog.close();
	}
};
