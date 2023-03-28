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

  return (
    <s.SideBar theme={theme}>
      {SideBarItems?.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Fragment key={index}>
          {item}
          <SideBarDivider />
        </Fragment>
      ))}
    </s.SideBar>
  );
};

export default SideBar;
