import { HTMLAttributes, MouseEvent, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { setMode } from "store/themeSlice";
import { useAppDispatch } from "hooks";
import ModalWindow from "components/ModalWindow/ModalWindow";
import IconButton from "components/UI/IconButton/IconButton";
import { navigationItems } from "consts";
import FlexBetween from "styles/components/FlexBetween.styled";
import { Paddings } from "styles/components/Paddings.styled";
import { closeSideNavbar } from "utils/closeSideNavbar";
import { ReactComponent as CloseButton } from "assets/icons/close-button.svg";
import { ReactComponent as ThemeIcon } from "assets/icons/theme.svg";
import {
	SideNavbarHeader,
	SideNavbarContent,
	SideNavbarNavigation,
	SideNavbarNavigationItem,
	ThemeWrapper,
} from "./SideNavbar.styled";

interface Props extends HTMLAttributes<HTMLDialogElement> {
	id: string;
}

function SideNavbar({ ...props }: Props) {
	const dispatch = useAppDispatch();
	const dialogId = props.id;

	return (
		<ModalWindow
			onClick={(event) =>
				closeSideNavbar(event, dialogId, ["#close-button", ".navigation-item"])
			}
			{...props}
		>
			<SideNavbarContent id="side-navbar-for-animation">
				<Paddings>
					<SideNavbarHeader>
						<IconButton
							id="close-button"
							width="25px"
							height="25px"
						>
							<CloseButton />
						</IconButton>
					</SideNavbarHeader>

					<nav>
						<SideNavbarNavigation>
							{navigationItems.map((item) => (
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

					<ThemeWrapper>
						<FlexBetween>
							<div>Тема</div>

							<IconButton onClick={() => dispatch(setMode())}>
								<ThemeIcon />
							</IconButton>
						</FlexBetween>
					</ThemeWrapper>
				</Paddings>
			</SideNavbarContent>
		</ModalWindow>
	);
}

export default SideNavbar;
