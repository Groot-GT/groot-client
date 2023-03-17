import { atom } from 'recoil';
import { NodeId } from 'src/types/node';

interface LineState {
  [key: NodeId]: {
    x: number;
    y: number;
    parentX: number;
    parentY: number;
  };
}

const lineState = atom<LineState>({
  key: 'lineState',
  default: {},
});

export default lineState;
