import Icon from 'src/components/atoms/Icon';
import { IconType } from 'src/types/icon';
import * as s from './style';

interface DropDownOptionProps<T> {
  value: T;
  icon?: IconType | undefined;
  onClick: () => void;
}

const DropDownOption = <T extends string | number>({
  value,
  onClick,
  icon = undefined,
}: DropDownOptionProps<T>) => (
  <s.Option onClick={onClick}>
    <s.DropdownIconWrapper>
      {icon ? <Icon iconImg={icon} /> : null}
    </s.DropdownIconWrapper>
    {value}
  </s.Option>
);

export default DropDownOption;
