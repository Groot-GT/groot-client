import { Node } from './types/node';

const nodeInfo: Node = {
  root: {
    parentId: '',
    children: ['1', '2', '3', '4'],
  },
  1: {
    parentId: 'root',
    children: ['5', '6', '7'],
  },
  2: {
    parentId: 'root',
    children: ['8', '9'],
  },
  3: {
    parentId: 'root',
    children: [],
  },
  4: {
    parentId: 'root',
    children: ['10'],
  },
  5: {
    parentId: '1',
    children: [],
  },
  6: {
    parentId: '1',
    children: [],
  },
  7: {
    parentId: '1',
    children: ['11'],
  },
  8: {
    parentId: '2',
    children: [],
  },
  9: {
    parentId: '2',
    children: ['12', '13', '14'],
  },
  10: {
    parentId: '4',
    children: [],
  },
  11: {
    parentId: '7',
    children: [],
  },
  12: {
    parentId: '9',
    children: [],
  },
  13: {
    parentId: '9',
    children: [],
  },
  14: {
    parentId: '9',
    children: [],
  },
};

export default nodeInfo;
