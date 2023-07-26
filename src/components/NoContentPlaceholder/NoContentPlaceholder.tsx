import { ReactComponent as SadEmojiIcon } from "assets/icons/sad-emoji.svg";
import * as Styled from "./NoContentPlaceholder.styled";

type Props = {
	isLargeSize?: boolean;
	isSearchPage?: boolean;
};

function NoContentPlaceholder({ isLargeSize = false, isSearchPage = false }: Props) {
	return (
		<Styled.Container isLargeSize={isLargeSize}>
			<span>{isSearchPage ? "Нет результатов" : "Альбомы пока не добавлены"}</span>

			<SadEmojiIcon />
		</Styled.Container>
	);
}

export default NoContentPlaceholder;
