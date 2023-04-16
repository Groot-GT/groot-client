import { ChangeEvent, useEffect, useRef, useState } from 'react';
import useNodesData from 'src/hooks/useNodeData';
import DropdownList from 'src/components/molecules/DropdownList';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type SearchBarProps = {
  setSearchMode: (mode: boolean) => void;
}

const SearchBar = ({ setSearchMode }: SearchBarProps) => {
  const { nodes } = useNodesData();
  const [inputValue, setInputValue] = useState<string>('');
  const [autocompleteOpen, setAutocompleteOpen] = useState<boolean>(false);
  const [autocompleteValues, setAutocompleteValues]
    = useState<string[]>([...Object.keys(nodes)]);
  const [searchbarWidth, setSearchbarWidth] = useState<number | undefined>(0);
  const searchResultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSearchbarWidth(searchResultRef.current?.getBoundingClientRect().width);
  }, []);

  useEffect(() => {
    if (setSearchMode) setSearchMode(inputValue.length > 0);
    if (inputValue.length) {
      setAutocompleteOpen(true);
      setAutocompleteValues(
        [...Object.keys(nodes)].filter(v => v.includes(inputValue)),
      );
    } else setAutocompleteOpen(false);

  }, [setSearchMode, nodes, inputValue]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleDropdownOptionClick = (optionValue: string) => {
    alert(optionValue);
    setAutocompleteOpen(false);
  };

  return (
    <>
      <s.SearchBarWrapper ref={searchResultRef}>
        <s.Searchbar value={inputValue} onChange={handleChange} />
        <Icon iconImg='search' />

      </s.SearchBarWrapper>
      <s.SearchResultWrapper ref={searchResultRef}>
        {autocompleteOpen ?
          <DropdownList
            items={autocompleteValues}
            dropdownWidth={searchbarWidth}
            handleOptionClick={handleDropdownOptionClick} />
          : null
        }
      </s.SearchResultWrapper>
    </>
  );
};

export default SearchBar;
