import AuthInput from "components/UI/AuthInput/AuthInput";
import Button from "components/UI/Button/Button";
import { AuthSwitch } from "styles/components/AuthSwitch.styled";
import { AuthTitle } from "styles/components/AuthTitle.styled";
import FlexColumn from "styles/components/FlexColumn.styled";

type Props = {
	switchToSignUp: () => void;
};

function Login({ switchToSignUp }: Props) {
	return (
		<>
			<AuthTitle>Вход в аккаунт</AuthTitle>

			<form action="">
				<FlexColumn gap="4rem">
					<FlexColumn gap="2.5rem">
						<AuthInput
							type="email"
							label="Имейл"
							tip=""
							placeholder="Имейл"
							autoComplete="email"
							autoFocus
						/>

						<AuthInput
							type="password"
							label="Пароль"
							tip=""
							placeholder="Пароль"
							autoComplete="off"
						/>
					</FlexColumn>

					<FlexColumn gap="1rem">
						<Button type="button">Войти</Button>

						<AuthSwitch>
							Еще нет аккаунта?{" "}
							<button onClick={switchToSignUp}>Зарегестрироваться</button>
						</AuthSwitch>
					</FlexColumn>
				</FlexColumn>
			</form>
		</>
	);
}

export default Login;
