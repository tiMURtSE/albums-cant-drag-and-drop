import { ValidationMessages } from "consts";
import { object, string, InferType } from "yup";

export const loginSchema = object({
	email: string().email(ValidationMessages.Email).required(ValidationMessages.Required),
	password: string()
		.min(8, ValidationMessages.Min + "8 символов")
		.matches(/(?=.*\d)(?=.*[!@#$%^&*])/, ValidationMessages.SpecialCharsAndDigits)
		.required(ValidationMessages.Required),
});

export type LoginFormData = InferType<typeof loginSchema>;
