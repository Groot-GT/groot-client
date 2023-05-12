import React, { MouseEventHandler } from 'react';
import { IconType } from 'src/types/icon';
import Item from 'src/components/molecules/Item';
import * as s from './style';

type ListItemProps = {
  itemTitle: string;
  deleteItem?: ((id: string) => void) | undefined;
  itemIcon?: IconType;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const defaultProps = {
  itemIcon: null,
  deleteItem: undefined,
  onClick: () => {
  },
  backgroundColor: 'transparent',
};

const ListItem = ({ itemTitle, itemIcon, onClick, backgroundColor, deleteItem }: ListItemProps) => (
  <s.ListItem>
    <Item
      onClick={onClick}
      itemIcon={itemIcon}
      backgroundColor={backgroundColor}
      itemTitle={itemTitle}
      deleteItem={deleteItem}
    />
  </s.ListItem>
);

ListItem.defaultProps = defaultProps;

export default ListItem;
