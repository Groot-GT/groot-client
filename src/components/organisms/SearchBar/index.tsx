import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';
import IconButton from 'src/components/molecules/IconButton';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type SearchBarProps = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
  collapseSearchBar: () => void;
}

const SearchBar = ({ searchInput, setSearchInput, collapseSearchBar }: SearchBarProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  return (
    <s.SearchBarWrapper>
      <Icon iconImg='search' />
      <s.Searchbar autoFocus value={searchInput} onChange={handleChange} />
      <IconButton icon='close' onClick={collapseSearchBar} />
    </s.SearchBarWrapper>
  );
};

export default SearchBar;
