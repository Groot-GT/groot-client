import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import onlineUsersState from 'src/recoil/onlineUsersState';
import ColorPanel from 'src/components/atoms/ColorPanel';
import Divider from 'src/components/atoms/Divider';
import { User } from 'src/types/user';
import theme from 'src/styles/theme';
import * as s from './style';

const UsersPanelDivider = () => (
  <s.UsersPanelDividerWrapper>
    <Divider />
  </s.UsersPanelDividerWrapper>
);

const CurrentUsersPanel = () => {
  const onlineUsers = useRecoilValue(onlineUsersState);

  return (
    <s.CurrentUsersPanelWrapper>
      {Object.values(onlineUsers).map((user: User, idx) => (
        <Fragment key={user.id}>
          <ColorPanel key={user.id} color={theme.titleColors[user.color][1]}>
            {user.id[0].toUpperCase()}
          </ColorPanel>
          {idx !== Object.values(onlineUsers).length - 1 && (
            <UsersPanelDivider />
          )}
        </Fragment>
      ))}
    </s.CurrentUsersPanelWrapper>
  );
};

export default CurrentUsersPanel;
