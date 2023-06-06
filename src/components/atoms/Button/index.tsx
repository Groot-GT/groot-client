import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  MouseEventHandler,
} from 'react';
import * as s from './style';

type ButtonAttributes = {
  children?: ReactNode[] | ReactNode | null;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const defaultProps = {
  children: null,
  variant: 'primary',
  disabled: false,
  onClick: () => {},
};

export type ButtonProps = ButtonAttributes &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant,
  disabled,
  onClick,
}: PropsWithChildren & ButtonProps) => (
  <s.Button onClick={onClick} variant={variant} disabled={disabled}>
    {children}
  </s.Button>
);

Button.defaultProps = defaultProps;

export default Button;
