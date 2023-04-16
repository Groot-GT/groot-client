import React, { SetStateAction, Dispatch, Fragment, useState } from 'react';
import { useTheme } from 'styled-components';
import Divider from 'src/components/atoms/Divider';
import SearchBar from 'src/components/organisms/SearchBar';
import * as s from './style';
import SideBarItem from '../../molecules/SideBarItem';
import DropdownList from '../../molecules/DropdownList';

type SideBarProps = {
  sidebarItems: JSX.Element[];
};

const SideBarDivider = () => {
  const theme = useTheme();
  return (
    <Divider vertical={false} length={100} color={theme.colors.black[2]} />
  );
};


const DefaultMode = ({ sidebarItems }: SideBarProps) => (
  <>
    {sidebarItems?.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Fragment key={index}>
        {item}
        <SideBarDivider />
      </Fragment>
    ))}
  </>
);

const SideBar = ({ sidebarItems }: SideBarProps) => {
  const [searchMode, setSearchMode] = useState<boolean>(false);

  return (
    <s.SideBar>
      <SideBarItem title='Search' element={
        <SearchBar setSearchMode={setSearchMode} />
      } />
      {searchMode ?
        null :
        <DefaultMode sidebarItems={sidebarItems} />
      }
    </s.SideBar>
  );
};

export default SideBar;
