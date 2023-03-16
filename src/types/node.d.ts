export interface Node {
  id: number;
  children: Node[];
}

export enum NodeDirection {
  top = 1,
  right = 2,
  bottom = 3,
  left = 4,
}
