import { atom, selector } from 'recoil';
import {
  Projects,
  ProjectsOwnerSortOption,
  ProjectsDateSortOption,
} from 'src/types/project';
import { UserId } from 'src/types/user';
import { projects } from 'src/mock';
import {
  projectsOwnerSortOptions,
  projectsDateSortOptions,
} from 'src/constants/project';

const projectsState = atom<Projects>({
  key: 'projectsState',
  default: projects,
});

export const projectsOwnerSortOptionState = atom<ProjectsOwnerSortOption>({
  key: 'projectOwnerSortOptionState',
  default: projectsOwnerSortOptions[0],
});

export const ProjectsDateSortOptionState = atom<ProjectsDateSortOption>({
  key: 'projectRecentSortOptionState',
  default: projectsDateSortOptions[0],
});

export const projectOwnersSelector = selector<UserId[]>({
  key: 'projectOwnersSelector',
  get: ({ get }) => {
    const projectsRecoilValue = get(projectsState);
    const owners = Object.values(projectsRecoilValue).map(
      (project) => project.owner.id,
    );
    return [...new Set(owners)];
  },
});

export const sortedProjectsSelector = selector<Projects>({
  key: 'sortedProjectsSelector',
  get: ({ get }) => {
    const currentProjects = get(projectsState);
    const projectsOwnerSortOption = get(projectsOwnerSortOptionState);
    const projectsDateSortOption = get(ProjectsDateSortOptionState);

    const filteredProjectsKeysByOwner = Object.keys(currentProjects).filter(
      (key: keyof Projects) => {
        const project = currentProjects[key];
        return (
          project.owner.id === projectsOwnerSortOption ||
          projectsOwnerSortOption === projectsOwnerSortOptions[0]
        );
      },
    );

    const sortedProjectsKeysByDate = filteredProjectsKeysByOwner.sort(
      (a, b) => {
        const aDate = currentProjects[a].createdAt;
        const bDate = currentProjects[b].createdAt;

        return projectsDateSortOption === projectsDateSortOptions[0]
          ? bDate.localeCompare(aDate)
          : -bDate.localeCompare(aDate);
      },
    );

    return sortedProjectsKeysByDate.reduce(
      (acc, currentKey) => ({
        [currentKey]: currentProjects[currentKey],
        ...acc,
      }),
      {},
    );
  },
});

export default projectsState;
