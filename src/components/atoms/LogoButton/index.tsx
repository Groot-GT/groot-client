import { useNavigate } from 'react-router-dom';
import { ToggleButtonAssets } from 'src/assets/asset';
import Logo from './Logo.svg';
import * as s from './style';

type LogoButtonProps = {
  bgTransparent?: boolean;
  fullLogo?: boolean;
};

const LogoButton = ({
  bgTransparent = false,
  fullLogo = false,
}: LogoButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <s.LogoButton onClick={handleClick} bgTransparent={bgTransparent}>
      <img src={fullLogo ? ToggleButtonAssets.full_logo : Logo} alt="logo" />
    </s.LogoButton>
  );
};

export default LogoButton;
