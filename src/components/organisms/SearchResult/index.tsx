import List from 'src/components/molecules/List';
import ListItem from 'src/components/atoms/ListItem';

type SearchAutoCompleteProps = {
  results: string[];
  handleOptionClick: (optionValue: string) => void;
}

const SearchResult = ({ results, handleOptionClick }: SearchAutoCompleteProps) => (
  <List items={results.map((result) => (
    <ListItem key={result} itemTitle={result} onClick={() => handleOptionClick(result)} />
  ))} />
);

export default SearchResult;
