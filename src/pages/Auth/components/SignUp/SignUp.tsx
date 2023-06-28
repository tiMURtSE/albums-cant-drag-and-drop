import AuthInput from "components/UI/AuthInput/AuthInput";
import { Form, LoginSuggestion } from "./SignUp.styled";
import Button from "components/UI/Button/Button";

type Props = {
	switchToLogin: () => void;
};

function SignUp({ switchToLogin }: Props) {
	return (
		<Form>
			<AuthInput
				type="text"
				label="Никнейм"
				tip=""
				placeholder="Введите свой никнейм"
				autoFocus
			/>

			<AuthInput
				type="email"
				label="Имейл"
				tip=""
				placeholder="Введите свой имейл"
				autoComplete="email"
			/>

			<AuthInput
				type="password"
				label="Пароль"
				tip=""
				placeholder="Введите свой пароль"
				autoComplete="off"
			/>

			<Button type="button">Зарегестрироваться</Button>

			<LoginSuggestion>
				Already have an account? <span onClick={switchToLogin}>Log In</span>
			</LoginSuggestion>
		</Form>
	);
}

export default SignUp;
