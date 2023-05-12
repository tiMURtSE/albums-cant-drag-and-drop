import DarkTheme from "components/Icons/DarkTheme/DarkTheme";
import LightTheme from "components/Icons/LightTheme/LightTheme";
import { Check, Input, Toggle, Wrapper } from "./ThemeToggle.styled";
import { useDispatch } from "react-redux";
import { setMode } from "store/themeSlice";

const ThemeToggle = () => {
	const dispatch = useDispatch();

	return (
		<Wrapper>
			<label htmlFor="toggle">
				<Input type="checkbox" id="toggle" />

				<Toggle onClick={() => dispatch(setMode())}>
					<Check>
						<LightTheme />
						<DarkTheme />
					</Check>
				</Toggle>
			</label>
		</Wrapper>
	);
};

export default ThemeToggle;
