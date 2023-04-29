import theme from 'src/styles/theme';
import ColorPanel from 'src/components/atoms/ColorPanel';
import useNodeColor from '../../../hooks/useNodeColor';
import * as s from './style';

type ColorType = keyof typeof theme.nodeColors;

const ColorPanelCollection = () => {
  const { setNodeColor } = useNodeColor();

  return (
    <s.ColorPanelCollection>
      {Object.values(theme.nodeColors).map((color) => (
        <ColorPanel
          key={color[1]}
          onClick={() => setNodeColor(color[1] as ColorType)}
          color={color[1] as ColorType} />
      ))}
    </s.ColorPanelCollection>
  );
};

export default ColorPanelCollection;
