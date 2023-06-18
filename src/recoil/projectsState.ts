import { atom, selector } from 'recoil';
import { currentUserState } from 'src/recoil/usersState';
import localStorageEffect from 'src/recoil/localStorageEffect';
import { projects } from 'src/mock';
import {
  ProjectId,
  Projects,
  ProjectsOrdering,
  ProjectsOrderingOption,
  ProjectsOwnerFilter,
} from 'src/types/project';
import { UserId } from 'src/types/user';
import {
  NEWEST_FIRST,
  projectOrderings,
  projectOrderingWithOptions,
  projectsOwnerFilterOptions,
  UPDATED_AT,
  CREATED_AT,
} from 'src/constants/project';
import {
  getCreatedAtTimePhrase,
  getUpdateAtTimePhrase,
} from 'src/utils/getTimeIntervalPhrase';
import sortProjectsByOptions from 'src/utils/sortProjectsByOptions';

const projectsState = atom<Projects>({
  key: 'projectsState',
  default: projects,
});

export const projectsOwnerFilterState = atom<ProjectsOwnerFilter>({
  key: 'projectsOwnerFilterState',
  default: projectsOwnerFilterOptions[0],
  effects: [
    localStorageEffect<ProjectsOwnerFilter>({
      key: 'projectsOwnerFilterState',
      defaultValue: projectsOwnerFilterOptions[0],
    }),
  ],
});

export const projectsOrderingState = atom<ProjectsOrdering>({
  key: 'projectsOrderingState',
  default: UPDATED_AT,
  effects: [
    localStorageEffect<ProjectsOrdering>({
      key: 'projectsOrderingState',
      defaultValue: projectOrderings[0],
    }),
  ],
});

export const projectsOrderingOptionState = atom<ProjectsOrderingOption>({
  key: 'projectsOrderingOptionState',
  default: NEWEST_FIRST,
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
    const projectsOrdering = get(projectsOrderingState);
    const updatedAtTimePhrases = get(updatedAtTimePhrasesSelector);
    const createdAtTimePhrases = get(createdAtTimePhrasesSelector);

    return projectsOrdering === CREATED_AT
      ? createdAtTimePhrases
      : updatedAtTimePhrases;
  },
});

export const sortedProjectsSelector = selector<Projects>({
  key: 'sortedProjectsSelector',
  get: ({ get }) => {
    const currentProjects = get(projectsState);
    const projectOwnerFilter = get(projectsOwnerFilterState);
    const projectOrdering = get(projectsOrderingState);
    const currentUser = get(currentUserState);
    const isReverse =
      get(projectsOrderingOptionState) ===
      projectOrderingWithOptions[projectOrdering][1];

    return sortProjectsByOptions(
      currentProjects,
      projectOwnerFilter,
      projectOrdering,
      currentUser,
      isReverse,
    );
  },
});

export default projectsState;
