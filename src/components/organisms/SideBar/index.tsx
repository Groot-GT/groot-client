import { useState, useRef } from 'react';
import SideBarItem from 'src/components/molecules/SideBarItem';
import Dropdown from 'src/components/organisms/Dropdown';
import SideBarDivider from 'src/components/molecules/SideBarDivider';
import { IconType } from 'src/types/icon';
import SearchMode from './Searchmode';
import DefaultMode from './DefaultMode';
import * as s from './style';

const exampleToggleButtons: IconType[] =
  Array.from({ length: 10 }).map(() => 'tree');

const dropdownItems: string[] =
  Array.from({ length: 10 }).map((_, idx) => `item ${idx}`);

const RightBar = () => (
  <s.SideBar>
    <SideBarItem
      title='Map Theme'
    />
    <SideBarDivider />
    <SideBarItem
      title='Theme direction'
      element={<Dropdown icons={exampleToggleButtons} items={dropdownItems} />}
    />
    <SideBarItem
      title='Theme colors'
    />
    <SideBarItem
      title='Image'
    />
  </s.SideBar>
);


const LeftBar = () => {
  const [searchMode, setSearchMode] = useState<boolean>(false);
  const sideBarRef = useRef<HTMLDivElement>(null);
  const changeMode = () => setSearchMode(!searchMode);
  return (
    <s.SideBar ref={sideBarRef}>
      {searchMode ?
        <SearchMode changeMode={changeMode} />
        :
        <DefaultMode changeMode={changeMode} />
      }
    </s.SideBar>
  );
};

export { RightBar, LeftBar };
