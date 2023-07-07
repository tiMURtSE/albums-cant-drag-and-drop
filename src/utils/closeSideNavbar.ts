import { KeyboardEvent, MouseEvent } from "react";

type EventType = MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>;

export const closeSideNavbar = (event: EventType, dialogId: string, selectors: string[]) => {
	const dialog = document.getElementById(dialogId) as HTMLDialogElement;
	const target = event.target as HTMLElement;

	if (dialog === target) {
		dialog.close();

		document.body.style.scrollbarGutter = "auto";
		document.body.style.overflow = "visible";
	}

	for (let i = 0; i < selectors.length; i++) {
		if (target.closest(selectors[i])) {
			dialog.close();

			document.body.style.scrollbarGutter = "auto";
			document.body.style.overflow = "visible";
		}
	}
};
