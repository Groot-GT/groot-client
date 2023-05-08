import { ReactNode } from 'react';
import * as s from './style';

type ColorPanelProps = {
  color: string;
  onClick?: () => void;
  children?: ReactNode;
}

const defaultProps = {
  onClick: () => {
  },
  children: null,
};

const ColorPanel = ({ color, onClick, children }: ColorPanelProps) =>
  <s.ColorPanel onClick={onClick} color={color}>
    {children}
  </s.ColorPanel>;

ColorPanel.defaultProps = defaultProps;

export default ColorPanel;
