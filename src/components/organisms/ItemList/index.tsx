import { useState } from 'react';
import List from 'src/components/molecules/List';
import Item from 'src/components/molecules/Item';

type ItemListProps = {
  items: JSX.Element[];
  keys: string[];
}

const ItemList = ({ items, keys }: ItemListProps) => {
  const [listItems, setListItems] = useState<JSX.Element[]>(items);

  const deleteItem = (key: string) => {
    setListItems(listItems.filter((item, idx) => keys[idx] !== key));
  };

  return (
    <List>
      {listItems.map((listItem, idx) => <Item itemTitle={keys[idx]} />)}
    </List>
  );
};

export default ItemList;
