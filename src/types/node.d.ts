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
    'background': string; // background color
    'root': string; // root color
    'text': string; // text color
  },
}

export interface Node {
  [key: NodeId]: NodeValue;
}
