import { Fragment } from 'react';
import * as s from './style';

type ListProps = {
  items: JSX.Element[];
}


const List = ({ items }: ListProps) => (
  <s.List>
    {items.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Fragment key={index}>
        {item}
      </Fragment>
    ))}
  </s.List>
);


export default List;
