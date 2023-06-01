import { User } from 'src/types/user';
import {
  ProjectId,
  Projects,
  ProjectsDateSortOption,
  ProjectsOwnerSortOption,
} from 'src/types/project';
import {
  projectsDateSortOptions,
  projectsOwnerSortOptions,
} from 'src/constants/project';

const sortProjectsByOptions = (
  currentProjects: Projects,
  projectsOwnerSortOption: ProjectsOwnerSortOption,
  projectsDateSortOption: ProjectsDateSortOption,
  currentUser: User,
) => {
  const filteredProjectsKeysByOwner: ProjectId[] = Object.keys(
    currentProjects,
  ).filter((key: ProjectId) => {
    const project = currentProjects[key];
    return (
      // Owned by specific user
      project.owner.id === projectsOwnerSortOption ||
      // Owned by anyone
      projectsOwnerSortOption === projectsOwnerSortOptions[0] ||
      // Owned by me
      (projectsOwnerSortOption === projectsOwnerSortOptions[1] &&
        project.owner.id === currentUser.id)
    );
  });

  const sortedProjectsKeysByDate: ProjectId[] =
    filteredProjectsKeysByOwner.sort((a: ProjectId, b: ProjectId) => {
      const isUpdatedAt = projectsDateSortOption === projectsDateSortOptions[0];
      const aDate = isUpdatedAt
        ? currentProjects[a].updatedAt
        : currentProjects[a].createdAt;
      const bDate = isUpdatedAt
        ? currentProjects[b].updatedAt
        : currentProjects[b].createdAt;

      return aDate.localeCompare(bDate);
    });

  return sortedProjectsKeysByDate.reduce(
    (acc, currentKey) => ({
      [currentKey]: currentProjects[currentKey],
      ...acc,
    }),
    {},
  );
};

export default sortProjectsByOptions;
