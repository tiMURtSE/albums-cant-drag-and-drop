import "styled-components";
import { ITheme } from "./theme/theme.interface";

declare module "styled-components" {
	export interface DefaultTheme extends ITheme {}
}
