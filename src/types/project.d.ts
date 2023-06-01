import {
  projectAttributeSortOptions,
  projectsOwnerSortOptions,
} from 'src/constants/project';
import { User, UserId } from './user';

export type ProjectId = string;
export type ProjectName = string;
export type ProjectOwner = User;
export type ProjectCreatedAt = string;
export type ProjectUpdatedAt = string;

export type ProjectsAttributeSortOption =
  (typeof projectAttributeSortOptions)[keyof typeof projectAttributeSortOptions];

export type ProjectsOwnerSortOption =
  | (typeof projectsOwnerSortOptions)[keyof typeof projectsOwnerSortOptions]
  | UserId;

export interface Project {
  id: ProjectId;
  name: ProjectName;
  owner: ProjectOwner;
  createdAt: ProjectCreatedAt;
  updatedAt: ProjectUpdatedAt;
}

export interface Projects {
  [key: ProjectId]: Project;
}
