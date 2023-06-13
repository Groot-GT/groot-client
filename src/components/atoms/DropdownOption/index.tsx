import Icon from 'src/components/atoms/Icon';
import { IconType } from 'src/types/icon';
import * as s from './style';

interface DropDownOptionProps<T> {
  value: T;
  icon?: IconType | null;
  onClick: () => void;
}

const defaultProps = {
  icon: null,
};

const DropDownOption = <T extends string | number>({
  value,
  onClick,
  icon,
}: DropDownOptionProps<T>) => (
  <s.Option onClick={onClick}>
    <s.DropdownIconWrapper>
      {icon ? <Icon iconImg={icon} /> : null}
    </s.DropdownIconWrapper>
    {value}
  </s.Option>
);

DropDownOption.defaultProps = defaultProps;

export default DropDownOption;
