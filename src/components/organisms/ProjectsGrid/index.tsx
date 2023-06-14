import { memo } from 'react';
import GridLayoutItem from 'src/components/molecules/ProjectBoardItem/GridLayoutItem';
import { ProjectsListProps } from 'src/components/organisms/ProjectsList';

const ProjectsGrid = ({
  sortedProjects,
  projectsDatePhrases,
  handleProjectItemClick,
}: ProjectsListProps) => (
  <>
    {Object.entries(sortedProjects).map(([projectId, project]) => (
      <GridLayoutItem
        project={project}
        projectDatePhrase={projectsDatePhrases[projectId]}
        handleProjectItemClick={() => handleProjectItemClick(projectId)}
      />
    ))}
  </>
);

export default memo(
  ProjectsGrid,
  (prevProps, nextProps) =>
    prevProps.sortedProjects === nextProps.sortedProjects,
);
