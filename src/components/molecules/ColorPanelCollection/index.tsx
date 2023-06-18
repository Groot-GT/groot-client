import theme from 'src/styles/theme';
import { useSetRecoilState } from 'recoil';
import nodeThemeState from 'src/recoil/nodeThemeState';
import ColorPanel from 'src/components/atoms/ColorPanel';
import { NodeColor } from 'src/types/color';
import * as s from './style';

const ColorPanelCollection = () => {
  const setNodeTheme = useSetRecoilState(nodeThemeState);

  return (
    <s.ColorPanelCollection>
      {Object.entries(theme.nodeColors).map(([color, colorValue]) => (
        <ColorPanel
          key={color}
          onClick={() => setNodeTheme(color as NodeColor)}
          color={colorValue.root as NodeColor}
        />
      ))}
    </s.ColorPanelCollection>
  );
};

export default ColorPanelCollection;
