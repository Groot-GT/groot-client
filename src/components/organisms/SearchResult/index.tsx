import List from 'src/components/molecules/List';
import ListItem from 'src/components/molecules/ListItem';
import useNodeSearchResults from 'src/hooks/useNodeSearchResults';

type SearchAutoCompleteProps = {
  searchInput: string;
  handleOptionClick: (optionValue: string) => void;
};

const SearchResult = ({
  searchInput,
  handleOptionClick,
}: SearchAutoCompleteProps) => {
  const searchResults = useNodeSearchResults(searchInput);

  return (
    <List>
      {searchResults.map((result) => (
        <ListItem key={result} onClick={() => handleOptionClick(result)}>
          {result}
        </ListItem>
      ))}
    </List>
  );
};

export default SearchResult;
