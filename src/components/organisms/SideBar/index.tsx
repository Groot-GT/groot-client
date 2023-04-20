import { Fragment, useState, useRef, useEffect } from 'react';
import SearchBar from 'src/components/organisms/SearchBar';
import SearchResult from 'src/components/organisms/SearchResult';
import SideBarItem from 'src/components/molecules/SideBarItem';
import IconButton from 'src/components/molecules/IconButton';
import SideBarDivider from 'src/components/molecules/SideBarDivider';
import useNodesData from 'src/hooks/useNodeData';
import * as s from './style';

type SideBarProps = {
  sidebarItems: JSX.Element[];
};

type SearchModeProps = {
  changeMode: () => void;
}

type DefaultModeProps = {
  changeMode: () => void;
  sidebarItems: JSX.Element[];
}

const SearchMode = ({ changeMode }: SearchModeProps) => {
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


const DefaultMode = ({ sidebarItems, changeMode }: DefaultModeProps) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    <SideBarItem title='Search' element={
      <IconButton icon='search' onClick={changeMode} />
    } />
    <SideBarDivider />
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
  const sideBarRef = useRef<HTMLDivElement>(null);
  // const
  const changeMode = () => setSearchMode(!searchMode);
  return (
    <s.SideBar ref={sideBarRef}>
      {searchMode ?
        <SearchMode changeMode={changeMode} />
        :
        <DefaultMode sidebarItems={sidebarItems} changeMode={changeMode} />
      }
    </s.SideBar>
  );
};

export default SideBar;
