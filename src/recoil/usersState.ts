import { atom } from 'recoil';
import { currentUser, users } from 'src/mock';
import { User, Users } from 'src/types/user';

const onlineUsersState = atom<Users>({
  key: 'usersState',
  default: users,
});

export const currentUserState = atom<User>({
  key: 'currentUserState',
  default: currentUser,
});

export default onlineUsersState;
