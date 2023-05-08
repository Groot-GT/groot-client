import Icon from 'src/components/atoms/Icon';
import { IconType } from '../../../types/icon';
import * as s from './style';

type DropDownOptionProps = {
  value: string;
  icon?: IconType | null;
  onClick: () => void;
}

const defaultProps = {
  icon: null,
};

const DropDownOption = ({ value, onClick, icon }: DropDownOptionProps) =>
  <s.Option onClick={onClick}>
    {icon ?
      <s.DropdownIconWrapper>
        <Icon iconImg={icon} />
      </s.DropdownIconWrapper>
      : null}
    {value}
  </s.Option>;

DropDownOption.defaultProps = defaultProps;

export default DropDownOption;
