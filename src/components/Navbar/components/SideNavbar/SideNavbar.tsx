import { HTMLAttributes, MouseEvent, useEffect } from "react";
import {
	SideNavbarHeader,
	SideNavbarContent,
	SideNavbarNavigation,
	SideNavbarNavigationItem,
} from "./SideNavbar.styled";
import { Paddings } from "components/Layout/Layout.styled";
import { closeSideNavbar } from "utils/closeSideNavbar";
import { NavigationItems } from "consts";
import { NavLink } from "react-router-dom";
import ModalWindow from "components/ModalWindow/ModalWindow";
import CloseButton from "components/UI/CloseButton/CloseButton";

interface Props extends HTMLAttributes<HTMLDialogElement> {
	id: string;
}

function SideNavbar({ ...props }: Props) {
	const dialogId = props.id;

	return (
		<ModalWindow
			onClick={(event) =>
				closeSideNavbar(event, dialogId, ["#close-button", ".navigation-item"])
			}
			{...props}
		>
			<SideNavbarContent>
				<Paddings>
					<SideNavbarHeader>
						<CloseButton />
					</SideNavbarHeader>

					<nav>
						<SideNavbarNavigation>
							{NavigationItems.map((item) => (
								<SideNavbarNavigationItem key={item.path}>
									<NavLink
										className={`navigation-item`}
										to={item.path}
									>
										{item.title}
									</NavLink>
								</SideNavbarNavigationItem>
							))}
						</SideNavbarNavigation>
					</nav>
				</Paddings>
			</SideNavbarContent>
		</ModalWindow>
	);
}

export default SideNavbar;
