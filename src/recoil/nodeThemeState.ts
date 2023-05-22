import { atom, selector } from 'recoil';
import theme from 'src/styles/theme';
import { RootVariant } from '../constants/node';

type NodeThemeType = keyof typeof theme.nodeColors;
type NodeThemeValueType = (typeof theme.nodeColors)[NodeThemeType];

const defaultTheme = 'yellow';

const nodeThemeState = atom<NodeThemeType>({
  key: 'nodeThemeState',
  default: defaultTheme,
});

export const nodeRootVariantState = atom<RootVariant>({
  key: 'nodeRootVariantState',
  default: RootVariant.BOTH_SIDE,
});

export const nodeThemeSelector = selector<NodeThemeValueType>({
  key: 'nodeThemeSelector',
  get: ({ get }) => theme.nodeColors[get(nodeThemeState)],
});

export default nodeThemeState;
