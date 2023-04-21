import 'styled-components';
import { ITheme } from '.';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}