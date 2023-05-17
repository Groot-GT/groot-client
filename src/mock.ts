import { Node } from './types/node';
import { OnlineUsers } from './types/user';
import { Projects } from './types/project';

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
    children: ['12', '13', '14', '15', '16'],
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
  15: {
    parentId: '9',
    children: [],
  },
  16: {
    parentId: '9',
    children: [],
  },
};

export const onlineUsers: OnlineUsers = {
  0: {
    'id': 'pinkishincoloragain',
    'color': 'red',
  },
  1: {
    'id': 'KingDonggyu',
    'color': 'blue',
  },
};

export const pageInfo = {
  'page1': {
    'name': 'pageName1',
    'url': '/page1',
  },
  'page2': {
    'name': 'pageName2',
    'url': '/page2',
  },
  'page3': {
    'name': 'pageName3',
    'url': '/page3',
  },
};

export const projects: Projects = {
  'project1': {
    'id': 'project1',
    'name': 'projectName1',
    'owner': {
      'id': 'pinkishincoloragain',
      'color': 'red',
    },
    'createdAt': '2021-08-01 00:00:00',
    'updatedAt': '2021-08-01 00:00:00',
  },
};

export default nodeInfo;
