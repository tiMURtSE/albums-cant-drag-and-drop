import { HTMLAttributes, MouseEvent } from "react";
import { IconWrapper } from "styles/components/IconWrapper.styled";
import { SideNavbarHeader, SideNavbarContent, SideNavbarWrapper } from "./SideNavbar.styled";
import { ReactComponent as XMarkIcon } from "/public/close-button.svg";
import { Paddings } from "components/Layout/Layout.styled";
import { closeSideNavbar } from "utils/closeSideNavbar";
import { ELementIds } from "consts";

interface Props extends HTMLAttributes<HTMLDialogElement> {
	id: string;
}

function SideNavbar({ ...props }: Props) {
	const dialogId = props.id;
	const closeButtonId = ELementIds.CloseButton;

	return (
		<SideNavbarWrapper
			onClick={(event) => closeSideNavbar(event, dialogId, closeButtonId)}
			{...props}
		>
			<SideNavbarContent>
				<Paddings>
					<SideNavbarHeader>
						<IconWrapper
							id="close-button"
							width="25px"
							height="25px"
							onClick={(event) => closeSideNavbar(event, dialogId, closeButtonId)}
						>
							<XMarkIcon />
						</IconWrapper>
					</SideNavbarHeader>
				</Paddings>
			</SideNavbarContent>
		</SideNavbarWrapper>
	);
}

export default SideNavbar;
