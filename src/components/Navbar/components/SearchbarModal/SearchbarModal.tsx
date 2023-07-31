import { HTMLAttributes, useState } from "react";
import ModalWindow from "components/ModalWindow/ModalWindow";
import { Paddings } from "styles/components/Paddings.styled";
import { closeSideNavbar } from "utils/closeSideNavbar";
import Searchbar from "../Searchbar/Searchbar";
import * as Styled from "./SearchbarModal.styled";

interface Props extends HTMLAttributes<HTMLDialogElement> {
	id: string;
}

function SearchbarModal({ ...props }: Props) {
	return (
		<ModalWindow
			onClick={(event) => closeSideNavbar(event, "searchbar-modal", ["#close-button"])}
			{...props}
		>
			<Styled.SearchbarModalContent id="search">
				<Paddings>
					<Styled.Title>Поиск:</Styled.Title>

					<Searchbar />
				</Paddings>
			</Styled.SearchbarModalContent>
		</ModalWindow>
	);
}

export default SearchbarModal;
