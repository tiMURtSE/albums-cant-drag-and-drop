import ModalWindow from "components/ModalWindow/ModalWindow";
import Searchbar from "../Searchbar/Searchbar";
import { closeSideNavbar } from "utils/closeSideNavbar";
import { HTMLAttributes } from "react";
import { SearchbarModalContent, SearchbarModalHeader } from "./SearchbarModal.styled";
import { Paddings } from "styles/components/Paddings.styled";

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
