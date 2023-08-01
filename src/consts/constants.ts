import { AppRoutes } from "./app-routes";

export const NAVIGATION = [
	{ path: AppRoutes.HOME, title: "Главная" },
	{ path: AppRoutes.COLLECTION, title: "Коллекция" },
];

export const ALBUMS_PER_PAGE = 5;

export enum ThemeMods {
	LIGHT = "light",
	DARK = "dark",
}

export enum ValidationMessages {
	REQUIRED = "Это поле обязательно для заполнения",
	EMAIL = "Введите корректный адрес электронной почты",
	MINUMUM_LENGTH = "Это поле должно содержать хотя бы ",
	SPECIAL_CHARS_AND_DIGITS = "Это поле должно содержать хотя бы 1 спец. символ и 1 цифру",
}
