import { MouseEventHandler } from 'react';
import { IconType } from 'src/types/icon';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type ListItemProps = {
  itemIcon?: IconType;
  itemTitle: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onDeleteClick?: MouseEventHandler<HTMLDivElement>;
  backgroundColor?: string;
}

const defaultProps = {
  itemIcon: null,
  onClick: () => {
  },
  onDeleteClick: () => {
  },
  backgroundColor: 'transparent',

};

const Item = ({ itemIcon, itemTitle, onClick, onDeleteClick, backgroundColor }: ListItemProps) => (
  <s.Item backgroundColor={backgroundColor} onClick={onClick}>
    {itemIcon ? <Icon iconImg={itemIcon} /> : null}
    <s.ItemTitle>{itemTitle}</s.ItemTitle>
    {onDeleteClick ? <Icon iconImg='close' /> : null}
  </s.Item>
);

Item.defaultProps = defaultProps;

export default Item;
