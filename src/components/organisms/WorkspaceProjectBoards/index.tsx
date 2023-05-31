import { useRecoilValue } from 'recoil';
import {
  projectGridViewState,
  sortedProjectsSelector,
} from 'src/recoil/projectsState';
import ProjectSortOptionPanel from 'src/components/organisms/ProjectSortOptionPanel';
import ProjectBoardItem from 'src/components/molecules/ProjectBoardItem/ProjectBoardItem';
import * as s from './style';

const WorkspaceProjectBoards = () => {
  const sortedProjects = useRecoilValue(sortedProjectsSelector);
  const isProjectGridLayout = useRecoilValue(projectGridViewState);

  return (
    <s.BoardsWrapper>
      <ProjectSortOptionPanel />
      <s.ProjectBoardTitleWrapper>Project name</s.ProjectBoardTitleWrapper>
      {Object.entries(sortedProjects).map(([projectId, project]) => (
        <ProjectBoardItem
          key={projectId}
          project={project}
          isGridLayout={isProjectGridLayout}
        />
      ))}
    </s.BoardsWrapper>
  );
};

export default WorkspaceProjectBoards;
