import { MouseEvent, ReactNode } from 'react';
import * as s from './style';

type ColorPanelProps = {
  color: string;
  onClick?: (() => void) | ((e: MouseEvent) => void);
  children?: ReactNode;
  size?: number;
};

const ColorPanel = ({
  color,
  onClick = () => {},
  children = null,
  size = 24,
}: ColorPanelProps) => (
  <s.ColorPanel onClick={onClick} color={color} size={size}>
    {children}
  </s.ColorPanel>
);

export default ColorPanel;
