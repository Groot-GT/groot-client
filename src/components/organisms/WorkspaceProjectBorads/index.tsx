import { useRecoilValue } from 'recoil';
import { sortedProjectsSelector } from 'src/recoil/projectsState';
import Item from 'src/components/molecules/Item';
import ProjectSortOptionPanel from 'src/components/organisms/ProjectSortOptionPanel';
import * as s from './style';

const WorkspaceProjectBorads = () => {
  const sortedProjects = useRecoilValue(sortedProjectsSelector);
  
  return (
    <s.BoardsWrapper>
      <ProjectSortOptionPanel />
      {Object.entries(sortedProjects).map(([projectId, project]) => (
        <Item key={projectId} itemTitle={project.name} deleteItem={undefined} />
      ))}
    </s.BoardsWrapper>
  );
};

export default WorkspaceProjectBorads;