import {
  A_Z,
  CREATED_AT,
  NAME,
  NEWEST_FIRST,
  OLDEST_FIRST,
  OWNED_BY_ANYONE,
  OWNED_BY_ME,
  UPDATED_AT,
  Z_A,
} from 'src/constants/project';
import { User, UserId } from './user';

export type ProjectId = string;
export type ProjectName = string;
export type ProjectOwner = User;
export type ProjectCreatedAt = string;
export type ProjectUpdatedAt = string;

export type ProjectsOwnerFilter = OWNED_BY_ANYONE | OWNED_BY_ME | UserId;
export type ProjectsOrdering =
  | typeof UPDATED_AT
  | typeof CREATED_AT
  | typeof NAME;

export type DateOrderingOption = NEWEST_FIRST | OLDEST_FIRST;
export type NameOrderingOption = A_Z | Z_A;

export type ProjectsOrderingOption = DateOrderingOption | NameOrderingOption;

export interface Project {
  id: ProjectId;
  owner: ProjectOwner;
  [NAME]: ProjectName;
  [CREATED_AT]: ProjectCreatedAt;
  [UPDATED_AT]: ProjectUpdatedAt;
}

export interface Projects {
  [key: ProjectId]: Project;
}
