import { atom } from 'recoil';
import { currentUser, users } from 'src/mock';
import { User, Users } from 'src/types/user';

// #TODO: Project별로 Online User를 관리해야 하는지 백엔드와 논의

const onlineUsersState = atom<Users>({
  key: 'usersState',
  default: users,
});

export const currentUserState = atom<User>({
  key: 'currentUserState',
  default: currentUser,
});

export default onlineUsersState;
