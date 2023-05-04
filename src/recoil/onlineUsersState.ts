import { atom } from 'recoil';
import { onlineUsers } from 'src/mock';
import { OnlineUsers } from 'src/types/user';

const onlineUsersState = atom<OnlineUsers>({
  key: 'onlineUsersState',
  default: onlineUsers,
});

export default onlineUsersState;
