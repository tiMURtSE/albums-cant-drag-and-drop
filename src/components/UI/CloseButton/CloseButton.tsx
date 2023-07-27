import { ReactComponent as XMarkIcon } from "assets/icons/close-button.svg";
import IconButton from "../IconButton/IconButton";
import { SideNavbarCloseButton } from "./CloseButton.styled";

type Props = {};

function CloseButton(props: Props) {
	return (
		<SideNavbarCloseButton
			type="button"
			id="close-button"
		>
			<IconButton
				width="25px"
				height="25px"
			>
				<XMarkIcon />
			</IconButton>
		</SideNavbarCloseButton>
	);
}

export default CloseButton;
