import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import { useTheme } from 'styled-components';
import * as s from './style';

type ButtonAttributes = {
  children?: ReactNode[] | ReactNode | null;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

const defaultProps = {
  children: null,
  variant: 'primary',
  disabled: false,
};

export type ButtonProps = ButtonAttributes &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant,
  disabled,
  ...props
}: PropsWithChildren & ButtonProps) => {
  const theme = useTheme();

  return (
    <s.Button theme={theme} variant={variant} disabled={disabled} {...props}>
      {children}
    </s.Button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
