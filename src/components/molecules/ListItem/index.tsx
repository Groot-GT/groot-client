import React, { MouseEventHandler, ReactNode } from 'react';
import Item from 'src/components/molecules/Item';
import * as s from './style';

type ListItemProps = {
  children: ReactNode;
  deleteItem?: (value: void) => void;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const ListItem = ({
  children,
  onClick = () => {},
  backgroundColor = 'transparent',
  deleteItem = undefined,
}: ListItemProps) => (
  <s.ListItem>
    <Item
      onClick={onClick}
      backgroundColor={backgroundColor}
      deleteItem={deleteItem}
    >
      {children}
    </Item>
  </s.ListItem>
);

export default ListItem;
