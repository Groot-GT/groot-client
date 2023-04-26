import { useTheme } from 'styled-components';
import Divider from '../../atoms/Divider';

const SideBarDivider = () => {
  const theme = useTheme();
  return (
    <Divider vertical={false} length={100} color={theme.colors.black[2]} />
  );
};

export default SideBarDivider;
