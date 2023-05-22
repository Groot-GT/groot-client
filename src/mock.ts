import { Node } from './types/node';
import { User, Users } from './types/user';
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

export const users: Users = {
  0: {
    id: 'pinkishincoloragain',
    color: 'red',
  },
  1: {
    id: 'KingDonggyu',
    color: 'blue',
  },
};

export const currentUser: User = {
  id: 'pinkishincoloragain',
  color: 'red',
};

export const pageInfo = {
  page1: {
    name: 'pageName1',
    url: '/page1',
  },
  page2: {
    name: 'pageName2',
    url: '/page2',
  },
  page3: {
    name: 'pageName3',
    url: '/page3',
  },
};

export const projects: Projects = {
  project1: {
    id: 'project1',
    name: 'projectName1',
    owner: {
      id: 'pinkishincoloragain',
      color: 'red',
    },
    createdAt: '2021-08-01 00:00:00',
    updatedAt: '2021-09-01 00:00:00',
  },
  project2: {
    id: 'project2',
    name: 'projectName2',
    owner: {
      id: 'KingDonggyu',
      color: 'blue',
    },
    createdAt: '2021-03-01 00:00:00',
    updatedAt: '2021-10-01 00:00:00',
  },
  project3: {
    id: 'project3',
    name: 'projectName3',
    owner: {
      id: 'Choijaewon',
      color: 'red',
    },
    createdAt: '2021-01-01 00:00:00',
    updatedAt: '2022-12-01 00:00:00',
  },
  project4: {
    id: 'project4',
    name: 'projectName4',
    owner: {
      id: 'GoJaefe',
      color: 'green',
    },
    createdAt: '2021-02-01 00:00:00',
    updatedAt: '2022-12-01 00:00:00',
  },
  project5: {
    id: 'project5',
    name: 'projectName5',
    owner: {
      id: 'Hajung',
      color: 'yellow',
    },
    createdAt: '2021-04-01 00:00:00',
    updatedAt: '2021-05-01 00:00:00',
  },
  project6: {
    id: 'project6',
    name: 'projectName6',
    owner: {
      id: 'Ming',
      color: 'blue',
    },
    createdAt: '2021-06-01 00:00:00',
    updatedAt: '2021-12-01 00:00:00',
  },
  project7: {
    id: 'project7',
    name: 'projectName7',
    owner: {
      id: 'Fish',
      color: 'red',
    },
    createdAt: '2021-07-01 00:00:00',
    updatedAt: '2022-01-01 00:00:00',
  },
  project8: {
    id: 'project8',
    name: 'projectName8',
    owner: {
      id: 'Hello',
      color: 'green',
    },
    createdAt: '2021-08-01 00:00:00',
    updatedAt: '2023-04-01 00:00:00',
  },
};

export default nodeInfo;
