import { MouseEventHandler } from 'react';
import { IconType } from 'src/types/icon';
import Item from 'src/components/molecules/Item';
import * as s from './style';

type ListItemProps = {
  itemIcon?: IconType;
  itemTitle: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  backgroundColor?: string;
}

const defaultProps = {
  itemIcon: null,
  onClick: () => {
  },
  backgroundColor: 'transparent',
};

const ListItem = ({ itemIcon, itemTitle, onClick, backgroundColor }: ListItemProps) => (
  <s.ListItem>
    <Item onClick={onClick} itemIcon={itemIcon} backgroundColor={backgroundColor} itemTitle={itemTitle} />
  </s.ListItem>
);

ListItem.defaultProps = defaultProps;

export default ListItem;
