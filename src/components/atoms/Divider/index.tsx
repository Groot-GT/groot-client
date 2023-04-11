import theme from 'src/styles/theme';
import { useTheme } from 'styled-components';
import * as s from './style';

type DividerProps = {
  // percentage of the parent width
  length?: number;
  thickness?: number;
  vertical?: boolean;
  color?: string;
};

const defaultProps = {
  length: 60,
  thickness: 1,
  vertical: true,
  color: theme.colors.black[4],
};

const Divider = ({ length, thickness, vertical, color }: DividerProps) => {
  const theme2 = useTheme();
  return (
    <s.DividerLine
      length={length}
      thickness={thickness}
      vertical={vertical}
      color={color}
      theme={theme2}
    />
  );
};

Divider.defaultProps = defaultProps;

export default Divider;
