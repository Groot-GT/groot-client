import { useState, useRef } from 'react';
import Dropdown from 'src/components/organisms/Dropdown';
import PageList from 'src/components/organisms/PageList';
import SearchBar from 'src/components/molecules/SearchBar';
import SideBarDivider from 'src/components/molecules/SideBarDivider';
import SideBarItem from 'src/components/molecules/SideBarItem';
import ColorPanelCollection from 'src/components/molecules/ColorPanelCollection';
import { IconType } from 'src/types/icon';
import Gap from 'src/components/atoms/Gap';
import SearchMode from './Searchmode';
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
      element={<ColorPanelCollection />}
    />
    <Gap />
  </s.SideBar>
);

const LeftBar = () => {
  const [searchInput, setSearchInput] = useState<string>('');

  const sideBarRef = useRef<HTMLDivElement>(null);
  return (
    <s.SideBar fullHeight ref={sideBarRef}>
      <SideBarItem title='' element={
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      } />
      {searchInput.length ?
        <SearchMode searchInput={searchInput} />
        :
        null
      }
      <SideBarDivider />
      <SideBarItem
        title='Pages'
        element={<PageList />}
        noPadding
      />
      <SideBarDivider />
    </s.SideBar>
  );
};

export { RightBar, LeftBar };
