import AuthInput from "components/UI/AuthInput/AuthInput";
import Button from "components/UI/Button/Button";
import { AuthSwitch } from "styles/components/AuthSwitch.styled";
import { AuthTitle } from "styles/components/AuthTitle.styled";
import FlexColumn from "styles/components/FlexColumn.styled";
import { FormWrapper } from "styles/components/FormWrapper.styled";

type Props = {
	switchToLogin: () => void;
};

function SignUp({ switchToLogin }: Props) {
	return (
		<>
			<AuthTitle>Регистрация</AuthTitle>

			<form>
				<FlexColumn gap="4rem">
					<FlexColumn gap="2.5rem">
						<AuthInput
							type="text"
							label="Никнейм"
							tip=""
							placeholder="Никнейм"
							autoFocus
						/>

						<AuthInput
							type="email"
							label="Имейл"
							tip=""
							placeholder="Имейл"
							autoComplete="email"
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
						<Button type="button">Зарегестрироваться</Button>

						<AuthSwitch>
							Уже есть аккаунт? <button onClick={switchToLogin}>Войти</button>
						</AuthSwitch>
					</FlexColumn>
				</FlexColumn>
			</form>
		</>
	);
}

export default SignUp;
