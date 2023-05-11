import { useRecoilState } from 'recoil';
import pageState from 'src/recoil/pageState';
import createNewPage from 'src/utils/createNewPage';
import List from 'src/components/molecules/List';
import ListItem from 'src/components/molecules/ListItem';
import IconButton from 'src/components/molecules/IconButton';
import * as s from './style';

const PageList = () => {
  const [pageData, setPageData] = useRecoilState(pageState);
  const pageList = Object.entries(pageData);

  const addPage = () => {
    const { newId, pageInfo } = createNewPage();
    setPageData({ ...pageData, [newId]: pageInfo });
  };

  const deletePage = (pageId: string) => {
    const newPageData = { ...pageData };
    delete newPageData[pageId];
    setPageData(newPageData);
  };

  return (
    <>
      <s.IconButtonWrapper>
        <IconButton icon='add' onClick={addPage} />
      </s.IconButtonWrapper>
      <List>
        {pageList.map(([id, page]) => (
          <ListItem key={id} itemTitle={page.name} deleteItem={() => deletePage(id)} />
        ))}
      </List>
    </>
  );
};

export default PageList;
