import { Fragment } from 'react';
import Divider from '../../atoms/Divider';
import * as s from './style';

type ListProps = {
  itemIcons?: JSX.Element[];
  itemTitles: string[];
}

const defaultProps = {
  itemIcons: [],
};

const List = ({ itemIcons, itemTitles }: ListProps) => (
  <s.List>
    {itemTitles.map((itemTitle, index) => (
      <Fragment key={itemTitle}>
        <s.ListItem>
          {itemIcons ? itemIcons[index] : null}
          <s.ListItemTitle>{itemTitle}</s.ListItemTitle>
        </s.ListItem>
        {index !== itemTitles.length - 1 ? <Divider length={100} vertical={false} /> : null}
      </Fragment>
    ))}
  </s.List>
);


List.defaultProps = defaultProps;

export default List;
