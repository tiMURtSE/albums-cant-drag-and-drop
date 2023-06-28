import AuthInput from "components/UI/AuthInput/AuthInput";
import { Form, SignUpSuggestion } from "./Login.styled";
import Button from "components/UI/Button/Button";

type Props = {
	switchToSignUp: () => void;
};

function Login({ switchToSignUp }: Props) {
	return (
		<Form action="">
			<AuthInput
				type="email"
				label="Имейл"
				tip=""
				placeholder="Введите свой имейл"
				autoComplete="email"
				autoFocus
			/>

			<AuthInput
				type="password"
				label="Пароль"
				tip=""
				placeholder="Введите свой пароль"
				autoComplete="off"
			/>

			<Button type="button">Войти</Button>

			<SignUpSuggestion>
				Don't have an account? <span onClick={switchToSignUp}>Sign Up</span>
			</SignUpSuggestion>
		</Form>
	);
}

export default Login;
