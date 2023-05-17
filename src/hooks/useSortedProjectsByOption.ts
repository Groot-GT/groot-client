import { useRecoilValue } from 'recoil';
import projectState from 'src/recoil/projectState';
import { Projects } from '../types/project';

type Option = 'name' | 'createdAt' | 'updatedAt';

const useSortedProjectsByOption = (option: Option): Projects => {
  const projects = useRecoilValue(projectState);

  const sortedKeys = Object.keys(projects).sort((a, b) => {
    if (projects[a][option] < projects[b][option]) {
      return -1;
    }
    if (projects[a][option] > projects[b][option]) {
      return 1;
    }
    return 0;
  });

  return sortedKeys.reduce((acc, currentKey) => ({
    [currentKey]: projects[currentKey],
    ...acc,
  }), {});
};

export default useSortedProjectsByOption;