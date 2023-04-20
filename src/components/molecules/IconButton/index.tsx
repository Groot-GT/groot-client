import { MouseEventHandler } from 'react';
import Icon from 'src/components/atoms/Icon';
import { IconType } from 'src/types/icon';
import * as s from './style';


type IconButtonProps = {
  icon: IconType;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
const IconButton = ({ icon, onClick, ...props }: IconButtonProps) =>
  <s.IconButton onClick={onClick} {...props}>
    <Icon iconImg={icon} />
  </s.IconButton>;


export default IconButton;
