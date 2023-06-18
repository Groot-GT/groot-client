import { User } from 'src/types/user';
import {
  ProjectId,
  Projects,
  ProjectsOrdering,
  ProjectsOwnerFilter,
} from 'src/types/project';
import { NAME, projectsOwnerFilterOptions } from 'src/constants/project';

const sortProjectsByOptions = (
  projects: Projects,
  owner: ProjectsOwnerFilter,
  order: ProjectsOrdering,
  currentUser: User,
  isReverse: boolean,
) => {
  const filteredProjectsKeysByOwner: ProjectId[] = Object.keys(projects).filter(
    (key: ProjectId) => {
      const project = projects[key];
      return (
        // Owned by specific user
        project.owner.id === owner ||
        // Owned by anyone
        owner === projectsOwnerFilterOptions[0] ||
        // Owned by me
        (owner === projectsOwnerFilterOptions[1] &&
          project.owner.id === currentUser.id)
      );
    },
  );

  let sortedProjectsKeysByOption: ProjectId[];

  const compareByName = (a: ProjectId, b: ProjectId) =>
    -projects[a][order]
      .toLowerCase()
      .localeCompare(projects[b][order].toLowerCase());

  const compareByDate = (a: ProjectId, b: ProjectId) =>
    projects[a][order].localeCompare(projects[b][order]);

  if (order === NAME) {
    sortedProjectsKeysByOption =
      filteredProjectsKeysByOwner.sort(compareByName);
  } else {
    sortedProjectsKeysByOption =
      filteredProjectsKeysByOwner.sort(compareByDate);
  }

  if (isReverse) sortedProjectsKeysByOption.reverse();

  return sortedProjectsKeysByOption.reduce(
    (acc, currentKey) => ({
      [currentKey]: projects[currentKey],
      ...acc,
    }),
    {},
  );
};
export default sortProjectsByOptions;
