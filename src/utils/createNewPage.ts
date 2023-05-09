import { Page } from '../types/page';

const createNewPage = (newPageIdx: number) => {
  const newPage: Page = {
    id: `pageId${newPageIdx + 1}`,
    name: `pageName${newPageIdx + 1}`,
    url: `/page${newPageIdx + 1}`,
  };

  return newPage;
};
export default createNewPage;
