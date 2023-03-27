import { Fragment } from 'react';
import Divider from 'src/components/atoms/Divider';

import { useTheme } from 'styled-components';
import * as s from './style';

const SideBarDivider = () => {
  const theme = useTheme();
  return (
    <Divider vertical={false} length={100} color={theme.colors.black[2]} />
  );
};

type SideBarProps = {
  SideBarItems: JSX.Element[];
};

const SideBar = ({ SideBarItems }: SideBarProps) => {
  const theme = useTheme();

  // This is bad code but needed to avoid eslint error
  const indexToString = (index: number) => index.toString();

  return (
    <s.SideBar theme={theme}>
      {SideBarItems?.map((item, index) => (
        <Fragment key={indexToString(index)}>
          {item}
          <SideBarDivider />
        </Fragment>
      ))}
    </s.SideBar>
  );
};

export default SideBar;
