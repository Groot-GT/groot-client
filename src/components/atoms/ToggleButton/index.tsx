import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type ToggleButtonProps = {
  clicked?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const defaultProps = {
  clicked: false,
};

const ToggleButton = ({ clicked, onClick }: ToggleButtonProps) =>
  (
    <s.ToggleButton clicked={clicked} onClick={onClick}>
      {clicked ?
        <Icon iconImg='chevronTop' /> :
        <Icon iconImg='chevronDown' />
      }
    </s.ToggleButton>
  );

ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
