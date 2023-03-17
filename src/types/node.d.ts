type NodeId = number;

export interface Node {
  [key: NodeId]: { children: NodeId[] };
}
