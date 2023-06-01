import { User } from 'src/types/user';
import {
  ProjectId,
  Projects,
  ProjectsAttributeSortOption,
  ProjectsOwnerSortOption,
} from 'src/types/project';
import { projectsOwnerSortOptions } from 'src/constants/project';

const sortProjectsByOptions = (
  currentProjects: Projects,
  projectsOwnerSortOption: ProjectsOwnerSortOption,
  projectsAttributeSortOption: ProjectsAttributeSortOption,
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

  const compareFunction = (a: ProjectId, b: ProjectId) =>
    currentProjects[a][projectsAttributeSortOption].localeCompare(
      currentProjects[b][projectsAttributeSortOption],
    );

  const sortedProjectsKeysByOption: ProjectId[] =
    filteredProjectsKeysByOwner.sort(compareFunction);

  return sortedProjectsKeysByOption.reduce(
    (acc, currentKey) => ({
      [currentKey]: currentProjects[currentKey],
      ...acc,
    }),
    {},
  );
};

export default sortProjectsByOptions;
