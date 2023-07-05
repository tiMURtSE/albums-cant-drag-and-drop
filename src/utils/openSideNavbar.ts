export const openSideNavbar = (id: string) => {
	const sideNavbar = document.getElementById(id) as HTMLDialogElement;

	sideNavbar.showModal();
};
