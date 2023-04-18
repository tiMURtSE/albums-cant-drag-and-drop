import 'styled-components';
import { ITheme } from './types/interface/index.interface';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}