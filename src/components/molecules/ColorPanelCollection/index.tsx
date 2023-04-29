import theme from 'src/styles/theme';
import { useSetRecoilState } from 'recoil';
import nodeThemeState from 'src/recoil/nodeThemeState';
import ColorPanel from 'src/components/atoms/ColorPanel';
import * as s from './style';

type ColorType = keyof typeof theme.nodeColors;

const ColorPanelCollection = () => {
  const setNodeTheme = useSetRecoilState(nodeThemeState);

  return (
    <s.ColorPanelCollection>
      {Object.entries(theme.nodeColors).map(([color, colorValue]) => (
        <ColorPanel
          key={color}
          onClick={() => setNodeTheme(color as ColorType)}
          color={colorValue[1] as ColorType} />
      ))}
    </s.ColorPanelCollection>
  );
};

export default ColorPanelCollection;
