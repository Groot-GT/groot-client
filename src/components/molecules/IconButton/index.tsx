import { MouseEventHandler, ReactNode } from 'react';
import { IconType } from 'src/types/icon';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type IconButtonProps = {
  icon: IconType;
  onClick: MouseEventHandler<HTMLButtonElement>;
  padding?: string | undefined;
  children?: ReactNode | null;
};
const IconButton = ({
  icon,
  onClick,
  children = undefined,
  padding = undefined,
}: IconButtonProps) => (
  <s.IconButton onClick={onClick} padding={padding}>
    <Icon iconImg={icon} />
    {children}
  </s.IconButton>
);

export default IconButton;
