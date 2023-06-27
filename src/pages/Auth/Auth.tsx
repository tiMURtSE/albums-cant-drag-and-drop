import Button from "components/UI/Button/Button";
import { AuthWrapper, Form } from "./Auth.styled";
import AuthInput from "components/UI/AuthInput/AuthInput";

type Props = {};

function Auth(props: Props) {
	return (
		<AuthWrapper>
			<Form action="">
				<AuthInput
					type="email"
					label="Логин"
					tip=""
					placeholder="Введите свой логин"
					autoComplete="email"
					autoFocus
				/>

				<AuthInput
					type="password"
					label="Пароль"
					tip=""
					placeholder="Введите свой пароль"
					autoComplete="off"
					autoFocus
				/>

				<Button type="button">Войти</Button>
			</Form>
		</AuthWrapper>
	);
}

export default Auth;
