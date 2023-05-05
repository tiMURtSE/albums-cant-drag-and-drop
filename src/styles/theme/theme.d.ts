import "styled-components";
import { ITheme } from "../../types/index";

declare module "styled-components" {
	export interface DefaultTheme extends ITheme {}
}
