import Divider from 'src/components/atoms/Divider';
import SideBarItem from 'src/components/atoms/SideBarItem';
import ToggleButton from 'src/components/atoms/ToggleButton';
import { useTheme } from 'styled-components';
import * as s from './style';

const SideBarDivider = () => {
  const theme = useTheme();
  return (
    <Divider vertical={false} length={100} color={theme.colors.black[2]} />
  );
};

const SideBarItems = [
  <SideBarItem
    title="Map theme"
    element={<ToggleButton onClick={() => alert('searchIcon')} />}
  />,
  <SideBarItem
    title="Theme direction"
    element={<ToggleButton onClick={() => alert('Theme direction')} />}
  />,
  <SideBarItem
    title="Pages"
    element={<ToggleButton onClick={() => alert('pages')} />}
  />,
];

const SideBar = () => {
  const theme = useTheme();

  return (
    <s.SideBar theme={theme}>
      {SideBarItems.map((item) => (
        <>
          {item}
          <SideBarDivider />
        </>
      ))}
    </s.SideBar>
  );
};

export default SideBar;
