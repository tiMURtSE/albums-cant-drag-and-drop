import { RegistrationFormData } from "validations/signUpSchema";

const REGISTER_API_URL = "http://localhost:3000/auth/register";

export const registerUser = async (formData: RegistrationFormData) => {
	try {
		const response = await fetch(REGISTER_API_URL, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(formData),
		});

		if (response.ok) {
			const savedUser = await response.json();

			console.log("Пользователь успешно зарегистрирован :", savedUser);
			return savedUser;
		} else {
			const error = await response.json();

			console.error("Ошибка регистрации :", error);
			return error;
		}
	} catch (error) {
		console.error("Произошла ошибка при регистрации: ", error);

		return error;
	}
};
