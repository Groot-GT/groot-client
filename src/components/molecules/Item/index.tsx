import { MouseEventHandler, useRef, useState } from 'react';
import { IconType } from 'src/types/icon';
import IconButton from 'src/components/molecules/IconButton';
import Icon from 'src/components/atoms/Icon';
import * as s from './style';

type ListItemProps = {
  itemIcon?: IconType;
  itemTitle: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  deleteItem: (id: string) => void | undefined;
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
  const [isHover, setIsHover] = useState(false);
  return (
    <s.Item
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      ref={itemRef}
      backgroundColor={backgroundColor}
    >
      {itemIcon ? <Icon iconImg={itemIcon} /> : null}
      <s.ItemTitle>{itemTitle}</s.ItemTitle>
      {deleteItem !== undefined && isHover ? <IconButton icon='_delete' onClick={() => deleteItem(itemTitle)} /> : null}
    </s.Item>
  );
};
Item.defaultProps = defaultProps;

export default Item;
