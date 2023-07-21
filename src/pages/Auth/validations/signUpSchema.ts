import { ValidationMessages } from "consts";
import { object, string, InferType } from "yup";

export const signUpSchema = object({
	nickname: string()
		.min(2, ValidationMessages.Min + "2 символа")
		.required(ValidationMessages.Required),
	email: string().email(ValidationMessages.Email).required(ValidationMessages.Required),
	password: string()
		.min(8, ValidationMessages.Min + "8 символов")
		.matches(/(?=.*\d)(?=.*[!@#$%^&*])/, ValidationMessages.SpecialCharsAndDigits)
		.required(ValidationMessages.Required),
});

export type SignUpFormData = InferType<typeof signUpSchema>;
