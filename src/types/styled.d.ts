// styled.d.ts
import 'styled-components';
import { LegoTheme } from '../theme/theme.types';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends LegoTheme {}
}
