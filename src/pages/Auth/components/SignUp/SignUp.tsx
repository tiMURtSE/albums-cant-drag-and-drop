import AuthInput from "components/UI/AuthInput/AuthInput";
import Button from "components/UI/Button/Button";
import { useForm } from "react-hook-form";
import { AuthSwitch } from "styles/components/AuthSwitch.styled";
import { AuthTitle } from "styles/components/AuthTitle.styled";
import FlexColumn from "styles/components/FlexColumn.styled";
import { SignUpFormData, signUpSchema } from "validations/signUpSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { theme } from "theme/theme";
import { useMediaQuery } from "hooks/useMediaQuery";

type Props = {
	switchToLogin: () => void;
};

function SignUp({ switchToLogin }: Props) {
	const smallMediaQuery = theme.media.small;
	const isBelowSmallScreens = useMediaQuery(smallMediaQuery);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(signUpSchema), mode: "onBlur" });

	const onSubmit = (data: SignUpFormData) => {
		console.log(data);
	};

	return (
		<>
			<AuthTitle>Регистрация</AuthTitle>

			<form onSubmit={handleSubmit(onSubmit)}>
				<FlexColumn gap="4rem">
					<FlexColumn gap={isBelowSmallScreens ? "2rem" : "2.5rem"}>
						<AuthInput
							type="text"
							label="Никнейм"
							placeholder="Никнейм"
							autoComplete="off"
							{...register("nickname")}
							tip={errors.nickname?.message}
						/>

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
						<Button type="submit">Зарегестрироваться</Button>

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
