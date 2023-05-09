import { useRecoilState } from 'recoil';
import List from 'src/components/molecules/List';
import ListItem from 'src/components/molecules/ListItem';
import pageState from 'src/recoil/pageState';

const PageList = () => {
  const [pageData, setPageData] = useRecoilState(pageState);
  const pageList = Object.values(pageData);

  return (
    <List>
      {pageList.map((page) => (
        <ListItem key={page.id} itemTitle={page.name} />
      ))}
    </List>
  );
};

export default PageList;
