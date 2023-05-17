import { User } from './user';

export type ProjectId = string;
export type ProjectName = string;
export type ProjectOwner = User;
export type ProjectCreatedAt = string;
export type ProjectUpdatedAt = string;

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
