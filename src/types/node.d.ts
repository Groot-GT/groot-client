type NodeId = number;

export interface Node {
  [key: NodeId]: { children: NodeId[] };
}

export enum NodeDirection {
  top = 1,
  right = 2,
  bottom = 3,
  left = 4,
}
