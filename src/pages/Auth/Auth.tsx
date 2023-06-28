import { useState } from "react";
import { AuthWrapper } from "./Auth.styled";
import Authorization from "./components/Login/Login";
import Registration from "./components/SignUp/SignUp";

type Props = {};

function Auth(props: Props) {
	const [isLogin, setIsLogin] = useState(true);

	const handleSwitchForm = () => {
		setIsLogin(!isLogin);
	};

	return (
		<AuthWrapper>
			{isLogin ? (
				<Authorization switchToSignUp={handleSwitchForm} />
			) : (
				<Registration switchToLogin={handleSwitchForm} />
			)}
		</AuthWrapper>
	);
}

export default Auth;
