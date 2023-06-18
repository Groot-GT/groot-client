import { MouseEvent, MouseEventHandler, ReactNode, useState } from 'react';
import IconButton from 'src/components/molecules/IconButton';
import * as s from './style';

type ListItemProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  deleteItem?: ((value: void) => void) | undefined;
  backgroundColor?: string;
  hoverColor?: string;
};

const Item = ({
  children,
  onClick = () => {},
  deleteItem = undefined,
  backgroundColor = 'transparent',
  hoverColor = 'transparent',
}: ListItemProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleItemDeleteClick = (e: MouseEvent) => {
    e.stopPropagation();
    if (deleteItem !== undefined) deleteItem();
  };

  return (
    <s.Item
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      {children}
      {deleteItem !== undefined && isHover ? (
        <IconButton icon="_delete" onClick={handleItemDeleteClick} />
      ) : null}
    </s.Item>
  );
};
export default Item;
