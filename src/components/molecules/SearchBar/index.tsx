import React, { Dispatch, SetStateAction, ChangeEvent } from 'react';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type SearchBarProps = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ searchInput, setSearchInput }: SearchBarProps) => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchInput(e.target.value);
  };

  return (
    <s.SearchBarWrapper>
      <Icon iconImg='search' />
      <s.Searchbar autoFocus value={searchInput} onChange={handleChange} />
    </s.SearchBarWrapper>
  );
};

export default SearchBar;
