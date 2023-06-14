import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import {
  projectDatePhrasesSelector,
  projectGridViewState,
  sortedProjectsSelector,
} from 'src/recoil/projectsState';
import { ProjectId } from 'src/types/project';
import ProjectSortOptionPanel from 'src/components/organisms/ProjectSortOptionPanel';
import ProjectsList from 'src/components/organisms/ProjectsList';
import ProjectsGrid from 'src/components/organisms/ProjectsGrid';
import * as s from './style';

const WorkspaceProjectBoard = () => {
  const sortedProjects = useRecoilValue(sortedProjectsSelector);
  const isProjectGridLayout = useRecoilValue(projectGridViewState);
  const projectsDatePhrases = useRecoilValue(projectDatePhrasesSelector);

  const navigate = useNavigate();

  const handleProjectItemClick = (projectId: ProjectId) => {
    navigate(`/projects${projectId}`);
  };

  const projectsProps = {
    sortedProjects,
    projectsDatePhrases,
    handleProjectItemClick,
  };

  return (
    <s.BoardsWrapper>
      <ProjectSortOptionPanel />
      <s.ProjectBoardItemsWrapper isGridLayout={isProjectGridLayout}>
        {isProjectGridLayout ? (
          <ProjectsGrid {...projectsProps} />
        ) : (
          <ProjectsList {...projectsProps} />
        )}
      </s.ProjectBoardItemsWrapper>
    </s.BoardsWrapper>
  );
};

export default WorkspaceProjectBoard;
