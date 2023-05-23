import theme from 'src/styles/theme';

export type UserId = string;
export type UserColor = keyof typeof theme.nodeColors;

export interface User {
  id: UserId;
  color: UserColor;
}

export interface Users {
  [key: number]: User;
}
