export const openSideNavbar = (id: string) => {
	const sideNavbar = document.getElementById(id) as HTMLDialogElement;

	sideNavbar.showModal();
	document.body.style.scrollbarGutter = "stable";
	document.body.style.overflow = "hidden";
};
