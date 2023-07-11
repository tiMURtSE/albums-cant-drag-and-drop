import { HTMLAttributes, MouseEvent, useEffect } from "react";
import {
	SideNavbarHeader,
	SideNavbarContent,
	SideNavbarNavigation,
	SideNavbarNavigationItem,
	ThemeWrapper,
} from "./SideNavbar.styled";
// import { Paddings } from "components/Layout/Layout.styled";
import { closeSideNavbar } from "utils/closeSideNavbar";
import { NavigationItems } from "consts";
import { NavLink } from "react-router-dom";
import ModalWindow from "components/ModalWindow/ModalWindow";
import { ButtonIconWrapper } from "styles/components/ButtonIconWrapper.styled";
import { ReactComponent as CloseButton } from "assets/icons/close-button.svg";
import FlexBetween from "styles/components/FlexBetween.styled";
import { useAppDispatch } from "hooks";
import { ReactComponent as ThemeIcon } from "assets/icons/theme.svg";
import { setMode } from "store/themeSlice";
import { Paddings } from "styles/components/Paddings.styled";

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
			<SideNavbarContent>
				<Paddings>
					<SideNavbarHeader>
						<ButtonIconWrapper
							type="button"
							id="close-button"
							width="25px"
							height="25px"
						>
							<CloseButton />
						</ButtonIconWrapper>
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

					<ThemeWrapper>
						<FlexBetween>
							<div>Тема</div>

							<ButtonIconWrapper
								type="button"
								width="20px"
								height="20px"
								onClick={() => dispatch(setMode())}
							>
								<ThemeIcon />
							</ButtonIconWrapper>
						</FlexBetween>
					</ThemeWrapper>
				</Paddings>
			</SideNavbarContent>
		</ModalWindow>
	);
}

export default SideNavbar;
