import { IconWrapper } from "styles/components/IconWrapper.styled";
import { SideNavbarCloseButton } from "./CloseButton.styled";
import { ReactComponent as XMarkIcon } from "assets/icons/close-button.svg";

type Props = {};

function CloseButton(props: Props) {
	return (
		<SideNavbarCloseButton
			type="button"
			id="close-button"
		>
			<IconWrapper
				width="25px"
				height="25px"
			>
				<XMarkIcon />
			</IconWrapper>
		</SideNavbarCloseButton>
	);
}

export default CloseButton;
