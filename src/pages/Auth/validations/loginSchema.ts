import { ValidationMessages } from "consts/constants";
import { object, string, InferType } from "yup";

export const loginSchema = object({
	email: string().email(ValidationMessages.EMAIL).required(ValidationMessages.REQUIRED),
	password: string()
		.min(8, ValidationMessages.MINUMUM_LENGTH + "8 символов")
		.matches(/(?=.*\d)(?=.*[!@#$%^&*])/, ValidationMessages.SPECIAL_CHARS_AND_DIGITS)
		.required(ValidationMessages.REQUIRED),
});

export type LoginFormData = InferType<typeof loginSchema>;
