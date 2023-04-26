import { useState, useEffect } from 'react';
import SearchBar from 'src/components/organisms/SearchBar';
import SearchResult from 'src/components/organisms/SearchResult';
import SideBarItem from 'src/components/molecules/SideBarItem';
import SideBarDivider from 'src/components/molecules/SideBarDivider';

import useNodesData from 'src/hooks/useNodeData';

type SideBarModeProps = {
  changeMode: () => void;
}


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

export default SearchMode;
