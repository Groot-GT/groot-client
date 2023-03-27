import { useTheme } from 'styled-components';
import * as s from './style';

const SideBar = () => {
  const theme = useTheme();
  return <s.SideBar theme={theme}>sidebar</s.SideBar>;
};

export default SideBar;
