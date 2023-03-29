import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo.svg';
import * as s from './style';

const LogoButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => navigate('/');

  return (
    <s.LogoButton onClick={handleClick} theme={theme}>
      <img src={Logo} alt="logo" />
    </s.LogoButton>
  );
};

export default LogoButton;
