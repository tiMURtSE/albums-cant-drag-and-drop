import { useMediaQuery } from "hooks/useMediaQuery";
import { theme } from "theme/theme";
import * as Styled from "./HotkeyTooltip.styled";

type Props = {
	query: string;
	isInputFocused: boolean;
};

function HotkeyTooltip({ query, isInputFocused }: Props) {
	const extraLargeScreenSize = theme.media.extraLarge;
	const isBelowExtraLargeScreenSize = useMediaQuery(extraLargeScreenSize);

	if (query || isBelowExtraLargeScreenSize || isInputFocused) return null;

	return (
		<Styled.Wrapper>
			<kbd>
				<Styled.InnerKbd>Ctrl K</Styled.InnerKbd>
			</kbd>
		</Styled.Wrapper>
	);
}

export default HotkeyTooltip;
