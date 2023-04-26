import theme from 'src/styles/theme';
import ColorPanel from 'src/components/atoms/ColorPanel';
import * as s from './style';
import useNodeColor from '../../../hooks/useNodeColor';

type ColorType = keyof typeof theme.nodeColors;

const ColorPanelCollection = () => {
  const { setNodeColor } = useNodeColor();

  return (
    <s.ColorPanelCollection>
      {Object.values(theme.nodeColors).map((color) => (
        <ColorPanel
          key={color}
          onClick={() => setNodeColor(color as ColorType)}
          color={color as ColorType} />
      ))}
    </s.ColorPanelCollection>
  );
};

export default ColorPanelCollection;
