import { WritableDraft } from 'react';

export type NodeId = string;
export type NodeChildren = NodeId[];
export type NodeRef = WritableDraft<HTMLDivElement>;

export interface NodeValue {
  parentId: NodeId;
  children: NodeChildren;
  position?: { x: number; y: number };
}

export interface NodeTheme {
  nodeColor: {
    0: string; // background color
    1: string; // root color
    2: string; // text color
  },
}

export interface Node {
  [key: NodeId]: NodeValue;
}
