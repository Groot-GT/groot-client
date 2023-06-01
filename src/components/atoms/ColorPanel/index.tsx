import { MouseEvent, ReactNode } from 'react';
import * as s from './style';

type ColorPanelProps = {
  color: string;
  onClick?: (() => void) | ((e: MouseEvent) => void);
  children?: ReactNode;
  size?: number;
};

const defaultProps = {
  onClick: () => {},
  children: null,
  size: 24,
};

const ColorPanel = ({ color, onClick, children, size }: ColorPanelProps) => (
  <s.ColorPanel onClick={onClick} color={color} size={size}>
    {children}
  </s.ColorPanel>
);

ColorPanel.defaultProps = defaultProps;

export default ColorPanel;
