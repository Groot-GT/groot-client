import theme from 'src/styles/theme';

export type UserId = string;
export type UserColor = keyof typeof theme.titleColors;

export interface User {
  id: UserId;
  color: UserColor;
}

export interface OnlineUsers {
  [key: number]: User;
}
