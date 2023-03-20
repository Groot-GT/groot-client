export type NodeId = number;
export type NodeChildren = NodeId[];

export interface Node {
  [key: NodeId]: { children: NodeChildren };
}

export interface NodePosition {
  x: number;
  y: number;
}

export interface NodeLine extends NodePosition {
  parentX: number;
  parentY: number;
}
