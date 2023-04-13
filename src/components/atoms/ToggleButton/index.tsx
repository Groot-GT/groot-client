import { ToggleButtonAssets } from '../../../assets/asset';
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
      <img
        src={
          clicked
            ? ToggleButtonAssets.chevronTop
            : ToggleButtonAssets.chevronDown
        }
        alt='toggle button'
      />
    </s.ToggleButton>
  );

ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
