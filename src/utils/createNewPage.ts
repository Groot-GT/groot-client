import uuid from 'react-uuid';

const createNewPage = () => {
  const newId = uuid();

  const pageInfo = {
    'name': `pageName${newId}`,
    'url': `/page${newId}`,
  };

  return { newId, pageInfo };
};
export default createNewPage;
