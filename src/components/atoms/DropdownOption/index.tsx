import * as s from './style';

type DropDownOptionProps = {
  value: string;
  icon?: string | null;
  onClick: () => void;
}

const defaultProps = {
  icon: null,
};

const DropDownOption = ({ value, onClick, icon }: DropDownOptionProps) =>
  <s.Option onClick={onClick}>
    <s.DropdownIconWrapper>
      {icon ? <s.Icon src={icon} /> : null}
    </s.DropdownIconWrapper>
    {value}
  </s.Option>;

DropDownOption.defaultProps = defaultProps;

export default DropDownOption;
