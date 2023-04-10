import * as s from './style';

type ListItemProps = {
  itemIcon?: JSX.Element;
  itemTitle: string;
}

const defaultProps = {
  itemIcon: null,
};

const ListItem = ({ itemIcon, itemTitle }: ListItemProps) => (
  <s.ListItem key={itemTitle}>
    {itemIcon}
    <s.ListItemTitle>{itemTitle}</s.ListItemTitle>
  </s.ListItem>
);

ListItem.defaultProps = defaultProps;

export default ListItem;
