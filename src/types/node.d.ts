import { RefObject } from 'react';

export type NodeId = string;
export type NodeChildren = NodeId[];
export type NodeRef = RefObject<HTMLDivElement>;

export interface Node {
  [key: NodeId]: { children: NodeChildren };
}

export interface NodeLine {
  ref: NodeRef;
  parentRef: NodeRef;
}
