import { atom, selector } from 'recoil';
import { ProjectCreatedAt, Projects } from 'src/types/project';
import { UserId } from 'src/types/user';
import { projects } from 'src/mock';

const projectState = atom<Projects>({
  key: 'projectState',
  default: projects,
});

export const projectOwnersSelector = selector<UserId[]>({
  key: 'projectOwnersSelector',
  get: ({ get }) => {
    const projectsRecoilValue = get(projectState);
    const owners = Object.values(projectsRecoilValue).map(project => project.owner.id);
    return [...new Set(owners)];
  },
});

export const projectCreatedAtDatesSelector = selector<ProjectCreatedAt[]>({
  key: 'projectCreatedAtDatesSelector',
  get: ({ get }) => {
    const projectsRecoilValue = get(projectState);
    const createdAtDates = Object.values(projectsRecoilValue).map(project => project.createdAt);
    return [...new Set(createdAtDates)];
  },
});

export default projectState;