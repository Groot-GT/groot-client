import theme from 'src/styles/theme';
import * as s from './style';

type ColorPanelProps = {
  color: keyof typeof theme.nodeColors;
  onClick?: () => void;
}

const defaultProps = {
  onClick: () => {
  },
};

const ColorPanel = ({ color, onClick }: ColorPanelProps) =>
  <s.ColorPanel onClick={onClick} color={color} />;

ColorPanel.defaultProps = defaultProps;

export default ColorPanel;
