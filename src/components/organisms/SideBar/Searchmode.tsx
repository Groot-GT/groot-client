import SearchResult from 'src/components/organisms/SearchResult';
import SideBarDivider from 'src/components/molecules/SideBarDivider';
import * as s from './style';

type SideBarModeProps = {
  searchInput: string;
}


const SearchMode = ({ searchInput }: SideBarModeProps) => {
  const handleDropdownOptionClick = (optionValue: string) => alert(optionValue);

  return (
    <s.SearchModeWrapper>
      <SideBarDivider />
      <SearchResult searchInput={searchInput} handleOptionClick={handleDropdownOptionClick} />
    </s.SearchModeWrapper>
  );
};


export default SearchMode;
