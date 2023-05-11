import { MouseEventHandler, useRef } from 'react';
import { IconType } from 'src/types/icon';
import IconButton from 'src/components/molecules/IconButton';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type ListItemProps = {
  itemIcon?: IconType;
  itemTitle: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  deleteItem: (id: string) => void;
  backgroundColor?: string;
}

const defaultProps = {
  itemIcon: null,
  onClick: () => {
  },
  backgroundColor: 'transparent',
};

const Item = ({ itemIcon, itemTitle, onClick, deleteItem, backgroundColor }: ListItemProps) => {
  const itemRef = useRef(null);

  return (
    <s.Item ref={itemRef} backgroundColor={backgroundColor} onClick={onClick}>
      {itemIcon ? <Icon iconImg={itemIcon} /> : null}
      <s.ItemTitle>{itemTitle}</s.ItemTitle>
      {deleteItem ? <IconButton icon='_delete' onClick={() => deleteItem(itemTitle)} /> : null}
    </s.Item>
  );
};
Item.defaultProps = defaultProps;

export default Item;
