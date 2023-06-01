import { atom, selector } from 'recoil';
import {
  Projects,
  ProjectsOwnerSortOption,
  ProjectsDateSortOption,
  ProjectId,
} from 'src/types/project';
import { UserId } from 'src/types/user';
import { projects } from 'src/mock';
import {
  projectsOwnerSortOptions,
  projectsDateSortOptions,
} from 'src/constants/project';
import {
  getCreatedAtTimePhrase,
  getUpdateAtTimePhrase,
} from 'src/utils/getTimeIntervalPhrase';
import { currentUserState } from './usersState';
import localStorageEffect from './localStorageEffect';
import { CREATED_AT } from '../constants/time';
import sortProjectsByOptions from '../utils/sortProjectsByOptions';

const projectsState = atom<Projects>({
  key: 'projectsState',
  default: projects,
});

export const projectsOwnerSortOptionState = atom<ProjectsOwnerSortOption>({
  key: 'projectOwnerSortOptionState',
  default: projectsOwnerSortOptions[0],
  effects: [
    localStorageEffect<ProjectsOwnerSortOption>({
      key: 'projectOwnerSortOptionState',
      defaultValue: projectsOwnerSortOptions[0],
    }),
  ],
});

export const ProjectsDateSortOptionState = atom<ProjectsDateSortOption>({
  key: 'projectRecentSortOptionState',
  default: projectsDateSortOptions[0],
  effects: [
    localStorageEffect<ProjectsDateSortOption>({
      key: 'projectRecentSortOptionState',
      defaultValue: projectsDateSortOptions[0],
    }),
  ],
});

export const projectGridViewState = atom<boolean>({
  key: 'projectGridViewState',
  default: true,
  effects: [
    localStorageEffect<boolean>({
      key: 'projectGridViewState',
      defaultValue: true,
    }),
  ],
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

export const updatedAtTimePhrasesSelector = selector<{
  [key in ProjectId]: string;
}>({
  key: 'updatedAtTimePhrasesSelector',
  get: ({ get }) => {
    const currentProjects = get(projectsState);
    return Object.keys(currentProjects).reduce(
      (acc, currentKey) => ({
        [currentKey]: getUpdateAtTimePhrase(
          currentProjects[currentKey].updatedAt,
        ),
        ...acc,
      }),
      {},
    );
  },
});

export const createdAtTimePhrasesSelector = selector<{
  [key in ProjectId]: string;
}>({
  key: 'createdAtTimePhrasesSelector',
  get: ({ get }) => {
    const currentProjects = get(projectsState);
    return Object.keys(currentProjects).reduce(
      (acc, currentKey) => ({
        [currentKey]: getCreatedAtTimePhrase(
          currentProjects[currentKey].createdAt,
        ),
        ...acc,
      }),
      {},
    );
  },
});

export const projectDatePhrasesSelector = selector<{
  [key in ProjectId]: string;
}>({
  key: 'projectDatePhrasesSelector',
  get: ({ get }) => {
    const projectsDateSortOption = get(ProjectsDateSortOptionState);
    const updatedAtTimePhrases = get(updatedAtTimePhrasesSelector);
    const createdAtTimePhrases = get(createdAtTimePhrasesSelector);

    return projectsDateSortOption === CREATED_AT
      ? createdAtTimePhrases
      : updatedAtTimePhrases;
  },
});

export const sortedProjectsSelector = selector<Projects>({
  key: 'sortedProjectsSelector',
  get: ({ get }) => {
    const currentProjects = get(projectsState);
    const projectsOwnerSortOption = get(projectsOwnerSortOptionState);
    const projectsDateSortOption = get(ProjectsDateSortOptionState);
    const currentUser = get(currentUserState);

    return sortProjectsByOptions(
      currentProjects,
      projectsOwnerSortOption,
      projectsDateSortOption,
      currentUser,
    );
  },
});

export default projectsState;
