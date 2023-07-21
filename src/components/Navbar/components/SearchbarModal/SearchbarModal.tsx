import { HTMLAttributes } from "react";
import ModalWindow from "components/ModalWindow/ModalWindow";
import { Paddings } from "styles/components/Paddings.styled";
import { closeSideNavbar } from "utils/closeSideNavbar";
import Searchbar from "../Searchbar/Searchbar";
import { SearchbarModalContent, SearchbarModalHeader } from "./SearchbarModal.styled";

interface Props extends HTMLAttributes<HTMLDialogElement> {
	id: string;
}

function SearchbarModal({ ...props }: Props) {
	return (
		<ModalWindow
			onClick={(event) => closeSideNavbar(event, "searchbar-modal", ["#close-button"])}
			{...props}
		>
			<SearchbarModalContent>
				<Paddings>
					<Searchbar />
				</Paddings>
			</SearchbarModalContent>
		</ModalWindow>
	);
}

export default SearchbarModal;
