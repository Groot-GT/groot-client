import { useState, useRef, useEffect } from 'react';
import SearchBar from 'src/components/organisms/SearchBar';
import SearchResult from 'src/components/organisms/SearchResult';
import Dropdown from 'src/components/organisms/Dropdown';
import SideBarItem from 'src/components/molecules/SideBarItem';
import IconButton from 'src/components/molecules/IconButton';
import SideBarDivider from 'src/components/molecules/SideBarDivider';
import List from 'src/components/molecules/List';
import ListItem from 'src/components/atoms/ListItem';
import ToggleButton from 'src/components/atoms/ToggleButton';
import useNodesData from 'src/hooks/useNodeData';
import { IconType } from 'src/types/icon';
import * as s from './style';

type SideBarModeProps = {
  changeMode: () => void;
}

const exampleToggleButtons: IconType[] =
  Array.from({ length: 10 }).map(() => 'tree');

const dropdownItems: string[] =
  Array.from({ length: 10 }).map((_, idx) => `item ${idx}`);

const exampleListItems: JSX.Element[] =
  Array.from({ length: 10 }).map(() => <ListItem itemTitle='List item' />);


const SearchMode = ({ changeMode }: SideBarModeProps) => {
  const { nodes } = useNodesData();
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  useEffect(() => {
    if (searchInput.length) {
      setSearchResults(
        [...Object.keys(nodes)].filter(v => v.includes(searchInput)),
      );
    } else {
      setSearchResults([]);
    }
  }, [nodes, searchInput]);


  const handleDropdownOptionClick = (optionValue: string) => {
    alert(optionValue);
  };

  const collapseSearchBar = () => {
    changeMode();
    setSearchInput('');
    setSearchResults([]);
  };

  return (
    <div>
      <SideBarItem title='' element={
        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          collapseSearchBar={collapseSearchBar}
        />
      } />
      <SideBarDivider />
      <SearchResult results={searchResults} handleOptionClick={handleDropdownOptionClick} />

    </div>
  );
};


const DefaultMode = ({ changeMode }: SideBarModeProps) => (
  <>
    <SideBarItem
      title='Search'
      element={<IconButton icon='search' onClick={changeMode} />} />
    <SideBarDivider />
    <SideBarItem
      title='Theme direction'
      element={<Dropdown icons={exampleToggleButtons} items={dropdownItems} />}
    />
    <SideBarDivider />
    <SideBarItem
      title='Theme colors'
      element={<ToggleButton onClick={() => alert('Theme colors')} />}
    />
    <SideBarDivider />
    <SideBarItem
      title='Pages'
      element={<List items={exampleListItems} />}
      noPadding
    />
    <SideBarDivider />
  </>
);


const SideBar = () => {
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

export default SideBar;
