import { MouseEventHandler } from 'react';
import { IconType } from 'src/types/icon';
import Item from 'src/components/molecules/Item';
import * as s from './style';

type ListItemProps = {
  itemTitle: string;
  itemIcon?: IconType;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const defaultProps = {
  itemIcon: null,
  onClick: () => {
  },
  backgroundColor: 'transparent',
};

const ListItem = ({ itemTitle, itemIcon, onClick, backgroundColor }: ListItemProps) => (
  <s.ListItem>
    <Item
      onClick={onClick}
      itemIcon={itemIcon}
      backgroundColor={backgroundColor}
      itemTitle={itemTitle}
    />
  </s.ListItem>
);

ListItem.defaultProps = defaultProps;

export default ListItem;
