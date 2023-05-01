import { useRecoilValue } from 'recoil';
import { useEffect, useState } from 'react';
import nodeState from 'src/recoil/nodeState';

const useNodeSearchResults = (searchInput: string) => {
  const nodes = useRecoilValue(nodeState);
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

  return searchResults;
};

export default useNodeSearchResults;
