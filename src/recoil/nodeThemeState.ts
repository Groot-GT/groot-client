import { atom, selector } from 'recoil';
import theme from 'src/styles/theme';

type NodeThemeType = keyof typeof theme.nodeColors;

const defaultTheme = 'yellow';

const nodeThemeState = atom<NodeThemeType>({
  key: 'nodeThemeState',
  default: defaultTheme,
});

export const nodeThemeSelector = selector({
  key: 'nodeThemeSelector',
  get: ({ get }) => (theme.nodeColors[get(nodeThemeState)]),
});

export default nodeThemeState;
