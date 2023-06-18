import { MouseEventHandler } from 'react';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type ToggleButtonProps = {
  clicked?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const ToggleButton = ({ clicked = false, onClick }: ToggleButtonProps) => (
  <s.ToggleButton clicked={clicked} onClick={onClick}>
    {clicked ? <Icon iconImg="chevronTop" /> : <Icon iconImg="chevronDown" />}
  </s.ToggleButton>
);

export default ToggleButton;
