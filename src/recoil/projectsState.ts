import { atom, selector } from 'recoil';
import {
  Projects,
  ProjectsOwnerSortOption,
  ProjectsDateSortOption,
  ProjectId,
  ProjectCreatedAt,
} from 'src/types/project';
import { UserId } from 'src/types/user';
import { projects } from 'src/mock';
import {
  projectsOwnerSortOptions,
  projectsDateSortOptions,
} from 'src/constants/project';
import { currentUserState } from './usersState';

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

// #TODO: 정렬 기준이 CreatedAt, ModifiedAt임. 추가 정렬해야 할 것이 있는지.. 예시: 알파벳순 정렬 ..

export const sortedProjectsSelector = selector<Projects>({
  key: 'sortedProjectsSelector',
  get: ({ get }) => {
    const currentProjects = get(projectsState);
    const projectsOwnerSortOption = get(projectsOwnerSortOptionState);
    const projectsDateSortOption = get(ProjectsDateSortOptionState);
    const currentUser = get(currentUserState);

    const filteredProjectsKeysByOwner: ProjectId[] = Object.keys(
      currentProjects,
    ).filter((key: keyof Projects) => {
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
        const aDate: ProjectCreatedAt = currentProjects[a].createdAt;
        const bDate: ProjectCreatedAt = currentProjects[b].createdAt;

        return projectsDateSortOption === projectsDateSortOptions[0]
          ? bDate.localeCompare(aDate)
          : -bDate.localeCompare(aDate);
      });

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
