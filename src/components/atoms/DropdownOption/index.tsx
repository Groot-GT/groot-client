import * as s from './style';

type DropDownOptionProps = {
  value: string;
  onClick: () => void;
}

const DropDownOption = ({ value, onClick }: DropDownOptionProps) =>
  <s.Option onClick={onClick}>
    {value}
  </s.Option>;

export default DropDownOption;
