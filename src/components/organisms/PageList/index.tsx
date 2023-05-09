import { useRecoilState } from 'recoil';
import pageState from 'src/recoil/pageState';
import createNewPage from 'src/utils/createNewPage';
import List from 'src/components/molecules/List';
import ListItem from 'src/components/molecules/ListItem';
import IconButton from 'src/components/molecules/IconButton';

const PageList = () => {
  const [pageData, setPageData] = useRecoilState(pageState);
  const pageList = Object.values(pageData);

  const addPage = () => {
    const newPage = createNewPage(pageList.length);
    setPageData({ ...pageData, [newPage.id]: newPage });
  };

  return (
    <>
      <IconButton icon='add' onClick={addPage} />
      <List>
        {pageList.map((page) => (
          <ListItem key={page.id} itemTitle={page.name} />
        ))}
      </List>
    </>
  );
};

export default PageList;
