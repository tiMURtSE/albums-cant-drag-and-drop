import { HTMLAttributes, MouseEvent, useEffect } from "react";
import { IconWrapper } from "styles/components/IconWrapper.styled";
import {
	SideNavbarHeader,
	SideNavbarContent,
	SideNavbarWrapper,
	SideNavbarNavigation,
	SideNavbarNavigationItem,
	SideNavbarCloseButton,
} from "./SideNavbar.styled";
import { ReactComponent as XMarkIcon } from "assets/icons/close-button.svg";
import { Paddings } from "components/Layout/Layout.styled";
import { closeSideNavbar } from "utils/closeSideNavbar";
import { NavigationItems } from "consts";
import { NavLink } from "react-router-dom";

interface Props extends HTMLAttributes<HTMLDialogElement> {
	id: string;
}

function SideNavbar({ ...props }: Props) {
	const dialogId = props.id;

	return (
		<SideNavbarWrapper
			onClick={(event) => closeSideNavbar(event, dialogId, "#close-button")}
			{...props}
		>
			<SideNavbarContent>
				<Paddings>
					<SideNavbarHeader>
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
					</SideNavbarHeader>

					<nav>
						<SideNavbarNavigation>
							{NavigationItems.map((item) => (
								<SideNavbarNavigationItem key={item.path}>
									<NavLink
										className={`navigation-item`}
										to={item.path}
										onClick={(event) =>
											closeSideNavbar(event, dialogId, ".navigation-item")
										}
									>
										{item.title}
									</NavLink>
								</SideNavbarNavigationItem>
							))}
						</SideNavbarNavigation>
					</nav>
				</Paddings>
			</SideNavbarContent>
		</SideNavbarWrapper>
	);
}

export default SideNavbar;
