import AuthInput from "components/UI/AuthInput/AuthInput";
import Button from "components/UI/Button/Button";
import { AuthSwitch } from "styles/components/AuthSwitch.styled";
import { AuthTitle } from "styles/components/AuthTitle.styled";
import FlexColumn from "styles/components/FlexColumn.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormData, loginSchema } from "validations/loginSchema";
import { useMediaQuery } from "hooks/useMediaQuery";
import { theme } from "theme/theme";

type Props = {
	switchToSignUp: () => void;
};

function Login({ switchToSignUp }: Props) {
	const smallMediaQuery = theme.media.small;
	const isBelowSmallScreens = useMediaQuery(smallMediaQuery);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(loginSchema), mode: "onBlur" });

	const onSubmit = (data: LoginFormData) => {
		console.log(data);
	};

	return (
		<>
			<AuthTitle>Вход в аккаунт</AuthTitle>

			<form onSubmit={handleSubmit(onSubmit)}>
				<FlexColumn gap="4rem">
					<FlexColumn gap="3rem">
						<AuthInput
							type="email"
							label="Имейл"
							placeholder="Имейл"
							autoComplete="email"
							{...register("email")}
							tip={errors.email?.message}
						/>

						<AuthInput
							type="password"
							label="Пароль"
							placeholder="Пароль"
							{...register("password")}
							tip={errors.password?.message}
						/>
					</FlexColumn>

					<FlexColumn gap="1rem">
						<Button type="submit">Войти</Button>

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
