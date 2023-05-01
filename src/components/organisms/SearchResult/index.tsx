import List from 'src/components/molecules/List';
import ListItem from 'src/components/atoms/ListItem';
import useNodeSearchResults from 'src/hooks/useNodeSearchResults';

type SearchAutoCompleteProps = {
  searchInput: string;
  handleOptionClick: (optionValue: string) => void;
}

const SearchResult = ({ searchInput, handleOptionClick }: SearchAutoCompleteProps) => {
  const searchResults = useNodeSearchResults(searchInput);

  return (
    <List items={searchResults.map((result) => (
      <ListItem key={result} itemTitle={result} onClick={() => handleOptionClick(result)} />
    ))} />
  );
};

export default SearchResult;
