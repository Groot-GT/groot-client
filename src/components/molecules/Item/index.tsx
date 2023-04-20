import { MouseEventHandler } from 'react';
import { IconType } from 'src/types/icon';
import Icon from 'src/components/atoms/Icon';
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

const Item = ({ itemIcon, itemTitle, onClick, backgroundColor }: ListItemProps) => (
  <s.Item backgroundColor={backgroundColor} onClick={onClick}>
    {itemIcon ? <Icon iconImg={itemIcon} /> : <Icon iconImg='blackDot' />}
    <s.ItemTitle>{itemTitle}</s.ItemTitle>
  </s.Item>
);

Item.defaultProps = defaultProps;

export default Item;
