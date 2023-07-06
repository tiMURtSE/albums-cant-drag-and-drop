import { KeyboardEvent, MouseEvent } from "react";

type EventType = MouseEvent<HTMLElement>;

export const closeSideNavbar = (event: EventType, dialogId: string, selector: string) => {
	const dialog = document.getElementById(dialogId) as HTMLDialogElement;
	const target = event.target as HTMLElement;

	if (dialog === target || target.closest(selector)) {
		dialog.close();
	}
};
