import { memo } from 'react';
import { ProjectId, Projects } from 'src/types/project';
import ListLayoutItem from 'src/components/molecules/ProjectBoardItem/ListLayoutItem';

export type ProjectsListProps = {
  sortedProjects: Projects;
  projectsDatePhrases: { [key: ProjectId]: string };
  handleProjectItemClick: (projectId: ProjectId) => void;
};

const ProjectsList = ({
  sortedProjects,
  projectsDatePhrases,
  handleProjectItemClick,
}: ProjectsListProps) => (
  <>
    {Object.entries(sortedProjects).map(([projectId, project]) => (
      <ListLayoutItem
        key={projectId}
        project={project}
        projectDatePhrase={projectsDatePhrases[projectId]}
        handleProjectItemClick={() => handleProjectItemClick(projectId)}
      />
    ))}
  </>
);

export default memo(
  ProjectsList,
  (prevProps, nextProps) =>
    prevProps.sortedProjects === nextProps.sortedProjects,
);
