import { atom } from 'recoil';
import theme from 'src/styles/theme';

const defaultTheme = 'yellow';

type NodeThemeType = keyof typeof theme.nodeColors;

const nodeThemeState = atom<NodeThemeType>({
  key: 'themeState',
  default: defaultTheme,
});

export default nodeThemeState;
