import React, { MouseEventHandler, ReactNode, useState } from 'react';
import Item from 'src/components/molecules/Item';
import * as s from './style';

type ListItemProps = {
  children: ReactNode;
  deleteItem?: (value: void) => void;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const defaultProps = {
  deleteItem: undefined,
  onClick: () => {},
  backgroundColor: 'transparent',
};

const ListItem = ({
  children,
  onClick,
  backgroundColor,
  deleteItem,
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
ListItem.defaultProps = defaultProps;

export default ListItem;
